import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { validatePassword } from '@/lib/auth'; // Ensure this decrypts correctly
// import { RowDataPacket } from 'mysql2';

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json(
                { message: 'Email and password are required' },
                { status: 400 }
            );
        }

        // Fetch user from database
        const [rows] = await pool.execute(
            'SELECT * FROM users WHERE email = ?',
            [email]
        );

        const users = rows as any[]; // Type assertion for simplicity

        if (users.length === 0) {
            return NextResponse.json(
                { message: 'Invalid credentials' },
                { status: 401 }
            );
        }

        const user = users[0];

        // Validate password (decrypt stored password and compare)
        const isValid = validatePassword(password, user.password_encrypted);

        if (!isValid) {
            return NextResponse.json(
                { message: 'Invalid credentials' },
                { status: 401 }
            );
        }

        // In a real app, generate JWT or session here.
        // For this project, we'll return a success message and basic user info (excluding password).
        const { password_encrypted, verification_token, ...userWithoutPassword } = user;

        return NextResponse.json(
            { message: 'Login successful', user: userWithoutPassword },
            { status: 200 }
        );
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}
