import * as React from 'react';
import Box from '@mui/material/Box';
import { Divider, Typography } from '@mui/material';
export default function Writing() {
    return (
        <>
            <Box sx={{ mb: 7, mt: 5 }}>
                <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
                    Writing
                </Typography>
                <Divider sx={{ mt: 3, mb: 5 }} />

            </Box>
        </>
    );
}
