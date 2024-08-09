import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { GitHub } from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Avatar, Grid, IconButton } from '@mui/material';

export default function Introduction() {
    return (
        <>
            <Box sx={{ width: '100%', mt: 5, mb: 5 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2 }}>
                    <Grid item xs={12} sm={12} md={3}>
                        <Avatar
                            alt="Remy Sharp"
                            src="./next.svg"
                            sx={{ width: 175, height: 175, borderRadius: 100, border: 3, borderColor: '#b2ebf2' }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={9}>
                        <Typography gutterBottom variant="h4" sx={{ mb: 1 }}>
                            Ahmad Syarifuddin
                        </Typography>
                        <Typography variant="h5" sx={{ mb: 2 }}>
                            Software Engineer (Frontend & Mobile)
                        </Typography>
                        <Typography color="text.secondary" sx={{ mb: 1 }}>
                            Hey! 👋 I craft tutorials in Frontend and Mobile development. Let’s build something amazing together! 🚀
                        </Typography>
                        <Stack direction="row">
                            <IconButton><GitHub /></IconButton>
                            <IconButton><LinkedInIcon /></IconButton>
                            <IconButton><EmailIcon /></IconButton>
                        </Stack>
                    </Grid>
                </Grid>

            </Box>

        </>
    );
}
