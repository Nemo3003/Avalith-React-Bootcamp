import {Grid, CircularProgress} from '@mui/material'

export const CheckingAuth = () => {
  return (
    <Grid
    spacing={0}
    direction='column'
    alignItems='center'
    justifyContent='center'
    sx={{minHeight:'100vh', backgroundColor:'primary.main',padding:4}}
    >
        <CircularProgress color="success" />
    </Grid>
  )
}