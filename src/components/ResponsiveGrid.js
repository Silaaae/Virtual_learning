import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

function ResponsiveGrid() {
  return (
    <Grid container spacing={4}>
      {/* First Card */}
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5">Card 1</Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Second Card */}
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5">Card 2</Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Third Card */}
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5">Card 3</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default ResponsiveGrid;
