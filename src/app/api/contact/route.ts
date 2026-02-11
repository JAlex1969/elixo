import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { message: 'All fields are required' },
                { status: 400 }
            );
        }

        // Simulate sending email to admin
        console.log('--- CONTACT FORM SUBMISSION ---');
        console.log(`From: ${name} <${email}>`);
        console.log(`Message: ${message}`);
        console.log('-------------------------------');

        return NextResponse.json(
            { message: 'Message sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact error:', error);
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}
