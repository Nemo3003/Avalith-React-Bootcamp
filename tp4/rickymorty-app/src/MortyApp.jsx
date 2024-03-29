import React from 'react'
import { AuthErrorAlert } from './auth/components/AuthErrorAlert'
import { AppRouter } from './router/AppRouter'
import { AppTheme } from './theme/AppTheme'

import 'animate.css';

export const MortyApp = () => {
  return (
    <AppTheme>
        <AppRouter />
        <AuthErrorAlert />
    </AppTheme>   
  )
}
