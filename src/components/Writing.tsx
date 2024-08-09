import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from '@mui/material';
export default function Writing() {
    return (
        <>
            <Box sx={{ width: '100%', mb: 5 }}>
                <Stack direction={'row'}   justifyContent={'space-between'}
                >
                <Typography variant="h4" component="div" sx={{ mb: 1.5 }}>
                    Writing
                </Typography>
                <Typography variant="h6" component="div" sx={{ mb: 1.5 }}>
                    See All
                </Typography>
                </Stack>
            </Box>
        </>
    );
}
