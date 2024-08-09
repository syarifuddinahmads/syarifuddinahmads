import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { GitHub, Web } from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { IconButton, Tooltip } from '@mui/material';
import { useRouter } from 'next/router';

export default function Introduction() {
    const router = useRouter();

    const handleNavigation = (url: string) => {
        window.open(url, '_blank');
    };

    return (
        <>
            <Box sx={{ mt: 5, mb: 5 }}>
                <Typography gutterBottom variant="h4" sx={{ mb: 0.5 }}>
                    Ahmad Syarifuddin
                </Typography>
                <Typography variant="h5" sx={{ mb: 2 }}>
                    Software Engineer (Frontend & Mobile)
                </Typography>
                <Typography variant='body1' sx={{ mb: 1 }}>
                    Hey! 👋 I craft tutorials in Frontend and Mobile development. Let’s build something amazing together! 🚀
                </Typography>
                <Stack direction="row">
                    <Tooltip title="Github"><IconButton onClick={() => handleNavigation('https://github.com/syarifuddinahmads')}><GitHub /></IconButton></Tooltip>
                    <Tooltip title="Linkedin"><IconButton onClick={() => handleNavigation('https://www.linkedin.com/in/syarifuddinahmads')}><LinkedInIcon /></IconButton></Tooltip>
                    <Tooltip title="Email"><IconButton onClick={() => handleNavigation('mailto:syarifuddinahmads.me@gmail.com')}><EmailIcon /></IconButton></Tooltip>
                    <Tooltip title="Jeda Ngoding"><IconButton onClick={() => handleNavigation('https://jedangoding.com')}><Web /></IconButton></Tooltip >
                </Stack >
            </Box >
        </>
    );
}
