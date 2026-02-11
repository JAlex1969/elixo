CREATE DATABASE IF NOT EXISTS elixo_zero_lisboa;
USE elixo_zero_lisboa;

-- Users table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_encrypted TEXT NOT NULL, -- Storing encrypted password as per requirements (not hashed)
    is_verified BOOLEAN DEFAULT FALSE,
    verification_token VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Point types (Categories)
CREATE TABLE IF NOT EXISTS point_types (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    icon_name VARCHAR(50) -- For frontend icon mapping
);

-- Collection Points
CREATE TABLE IF NOT EXISTS collection_points (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address TEXT NOT NULL,
    latitude DECIMAL(10, 8) NOT NULL,
    longitude DECIMAL(11, 8) NOT NULL,
    type_id INT,
    contact_info VARCHAR(255),
    schedule VARCHAR(255),
    website VARCHAR(255),
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (type_id) REFERENCES point_types(id)
);

-- Seed initial data for Point Types
INSERT INTO point_types (name, description, icon_name) VALUES 
('Centros de Receção', 'Locais oficiais da CML para entrega de resíduos.', 'warehouse'),
('Ecocentro Valorsul', 'Grandes instalações para diversos tipos de resíduos.', 'recycle'),
('Entrajuda', 'Doação de equipamentos para fins sociais.', 'heart'),
('Ponto Eletrão', 'Pequenos eletrodomésticos e pilhas em lojas/supermercados.', 'battery-charging'),
('Recolha CML', 'Recolha ao domicílio de grandes eletrodomésticos.', 'truck');

-- Seed sample Collection Points (approximate locations for demo)
INSERT INTO collection_points (name, address, latitude, longitude, type_id, contact_info, schedule, website) VALUES 
('Centro de Receção de Alcântara', 'Rua da Quinta do Cabrinha, Lisboa', 38.7123, -9.1789, 1, '808 20 32 32', 'Seg-Sáb 08:00-20:00', 'https://informacoeseservicos.lisboa.pt'),
('Ecocentro do Lumiar', 'Azinhaga dos Lameiros, Lisboa', 38.7734, -9.1567, 2, '21 855 09 00', 'Seg-Sex 09:00-18:00', 'https://www.valorsul.pt'),
('Entrajuda Alcântara', 'Rua da Cintura do Porto de Lisboa', 38.7012, -9.1701, 3, '21 360 05 00', 'Seg-Sex 09:30-18:00', 'https://www.entrajuda.pt'),
('Ponto Eletrão - Colombo', 'Av. Lusíada, Lisboa (Centro Comercial Colombo)', 38.7533, -9.1890, 4, 'N/A', '10:00-23:00', 'https://ondereciclar.pt');
