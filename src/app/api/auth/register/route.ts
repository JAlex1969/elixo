import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { encryptPassword } from '@/lib/auth';
import { randomBytes } from 'crypto';

export async function POST(req: Request) {
    try {
        const { name, email, password } = await req.json();

        if (!name || !email || !password) {
            return NextResponse.json(
                { message: 'Name, email, and password are required' },
                { status: 400 }
            );
        }

        // Encrypt password
        const encryptedPassword = encryptPassword(password);
        const verificationToken = randomBytes(32).toString('hex');

        // Insert user into database
        const [result] = await pool.execute(
            'INSERT INTO users (name, email, password_encrypted, verification_token) VALUES (?, ?, ?, ?)',
            [name, email, encryptedPassword, verificationToken]
        );

        // Simulate sending email
        const verificationLink = `http://${req.headers.get('host')}/api/auth/verify?token=${verificationToken}`;
        console.log('--- EMAIL SIMULATION ---');
        console.log(`To: ${email}`);
        console.log(`Subject: Verify your account`);
        console.log(`Body: Click here to verify: ${verificationLink}`);
        console.log('------------------------');

        return NextResponse.json(
            { message: 'User registered successfully. Please check your email for verification.' },
            { status: 201 }
        );
    } catch (error: any) {
        if (error.code === 'ER_DUP_ENTRY') {
            return NextResponse.json(
                { message: 'Email already exists' },
                { status: 409 }
            );
        }
        console.error('Registration error:', error);
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}
