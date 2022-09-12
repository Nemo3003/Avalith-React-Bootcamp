import { Grid, Typography } from "@mui/material";


export const AuthLayout = ({ children, title = '' }:any) => {
  return (
    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{minWidth: "150vh", minHeight: "100vh", backgroundColor: "primary.main", padding: 1 }}
    >
      <Grid
        item
        xs={12}
        sm={8}
        md={4}
        className="box-shadow"
        sx={{ backgroundColor: "#fff", padding: 3, borderRadius: 2 }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          {title}
        </Typography>
        {children}
      </Grid>
    </Grid>
  );
};