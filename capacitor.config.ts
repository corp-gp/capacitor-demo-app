/// <reference types="@capacitor/splash-screen" />

import { CapacitorConfig } from '@capacitor/cli'
import 'dotenv/config'

const HOST = process.env.VITE_BASE_URL!.split(/\/\//).pop()?.split(':')[0] as string

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "capacitor-demo-app",
  webDir: 'www',
  server: {
    allowNavigation: [HOST],
    cleartext: true
  },
}

export default config
