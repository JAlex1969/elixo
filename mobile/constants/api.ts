// Replace with your computer's local IP address
// Android Emulator uses 10.0.2.2 to access localhost of the host machine.
// iOS Simulator uses localhost.
// Real devices need the actual LAN IP (e.g., 192.168.1.5).

import { Platform } from 'react-native';

const API_URL = Platform.select({
    android: 'http://10.0.2.2:3000/api',
    ios: 'http://localhost:3000/api',
    default: 'http://localhost:3000/api',
});

export default API_URL;
