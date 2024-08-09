import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Footer() {
    return (
        <Box>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                marginBottom={3}
                spacing={2}
                justifyContent="space-between"
            >
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={2}
                    justifyContent="space-between"
                >
                    <Link href="#" color="inherit" underline="hover" variant="body1">
                        Github
                    </Link>
                    <Link href="#" color="inherit" underline="hover" variant="body1">
                        Linkedin
                    </Link>
                    <Link href="#" color="inherit" underline="hover" variant="body1">
                        Email
                    </Link>
                </Stack>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={2}
                    justifyContent="space-between"
                >
                    <Link href="#" color="inherit" underline="hover" variant="body1">
                        Terms of Service
                    </Link>
                    <Link href="#" color="inherit" underline="hover" variant="body1">
                        Contact Us
                    </Link>
                </Stack>
            </Stack>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                justifyContent="space-between"
            >
                <Typography variant="body1" sx={{ textAlign: 'start' }}>
                    Build with NextJs, Material UI and Vercel.
                </Typography>
                <Typography variant="body1" sx={{ textAlign: { sm: { textAlign: 'end' }, xs: { textAlign: 'start' } } }}>
                    © {new Date().getFullYear()} All rights reserved.
                </Typography>
            </Stack>
        </Box>
    );
}
