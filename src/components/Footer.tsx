import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Footer() {
    return (
        <Box sx={{ mt: 5, mb: 7 }}>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                justifyContent="space-between"
            >
                <Typography variant="body2" sx={{ textAlign: 'start' }}>
                    Build with NextJs, Material UI and Vercel.
                </Typography>
                <Typography variant="body2" sx={{ textAlign: { sm: { textAlign: 'end' }, xs: { textAlign: 'start' } } }}>
                    © {new Date().getFullYear()} All rights reserved.
                </Typography>
            </Stack>
        </Box>
    );
}
