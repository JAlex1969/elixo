import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const type = searchParams.get('type');

        let query = `
      SELECT p.*, t.name as type_name, t.icon_name 
      FROM collection_points p 
      LEFT JOIN point_types t ON p.type_id = t.id
    `;

        const params: any[] = [];

        if (type) {
            query += ' WHERE t.name LIKE ? OR t.description LIKE ?';
            // simple fuzzy search on type name or description
            params.push(`%${type}%`, `%${type}%`);
        }

        const [rows] = await pool.execute(query, params);

        return NextResponse.json(rows);
    } catch (error) {
        console.error('Error fetching points:', error);
        return NextResponse.json(
            { message: 'Failed to fetch collection points' },
            { status: 500 }
        );
    }
}
