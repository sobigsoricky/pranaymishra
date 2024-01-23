import React from 'react'
import { Box, Card, CardContent, Container, Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { Circle } from '@mui/icons-material'

const Resource = () => {
    return (
        <>
            <section className='bg--secondary' id="resourceBanner">
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11}>
                            <Box py={5}>
                                <Typography variant="h1" align='center' className='m-0'>RankFast SEO Resource Hub<br /><span className='text--teritory'>Available to you absolutely FREE!</span></Typography>
                                <Typography className='text-white tagline' align='center'>Carefully made, non-generic SEO resources.</Typography>
                                <Box>
                                    <Box className="non-g-resource">
                                        <Grid container spacing={{ xs: 2, sm: 5 }}>
                                            <Grid item xs={12} sm={6} md={4}>
                                                <Card className='resource-card bg--secondary' id="resource-card1">
                                                    <CardContent className=''>
                                                        <Box>
                                                            <Typography className='text--primary mb-2'>2024</Typography>
                                                            <Typography className='text-white'>193+ Latest SEO Statistics</Typography>
                                                            <Typography className='resource-card-title text-white'>SEO Statistic<br />Database</Typography>
                                                            <Box mt={1}>
                                                                <img src="/images/logo.png" className='img-fluid logo' />
                                                            </Box>
                                                        </Box>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={4}>
                                                <Card className='resource-card bg--secondary' id="resource-card2">
                                                    <CardContent>
                                                        <Box>
                                                            <Typography className='text--primary mb-2'>2024</Typography>
                                                            <Typography className='resource-card-title text-white mb-3'>Content Mastery<br /> Blueprint</Typography>
                                                            <Typography className='text-white'>The art and science of crafting clear, unique and useful content.</Typography>
                                                        </Box>
                                                        <Box mt={5}>
                                                            <img src="/images/logo.png" className='img-fluid logo' />
                                                        </Box>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={4}>
                                                <Card className='resource-card bg--secondary' id="resource-card3">
                                                    <CardContent>
                                                        <Box>
                                                            <Typography className='text--primary mb-2'>2024</Typography>
                                                            <Typography className='resource-card-title text-white mb-3'>Content Mastery<br /> Blueprint</Typography>
                                                            <Typography className='text-white'>The art and science of crafting clear, unique and useful content.</Typography>
                                                        </Box>
                                                        <Box mt={5}>
                                                            <img src="/images/logo.png" className='img-fluid logo' />
                                                        </Box>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={4}>
                                                <Card className='resource-card bg--primary' id="resource-card4">
                                                    <CardContent className=''>
                                                        <img src="/images/window.svg" alt="" className='img-fluid' />
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={4}>
                                                <Card className='resource-card bg--primary' id="resource-card5">
                                                    <CardContent>
                                                        <Box>
                                                            <img src="/images/window.svg" alt="" className='img-fluid' />
                                                        </Box>
                                                        <Box mt={0.58}>
                                                            <Typography className='resource-card-title' gutterBottom>SEO-Business<br />
                                                                Alignment Tool</Typography>
                                                            <Typography>27 Core questions to determine and establish your SEO-Business Alignment</Typography>
                                                        </Box>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={4}>
                                                <Card className='resource-card bg-white' id="resource-card6">
                                                    <CardContent className='d-flex justify-content-center align-items-center '>
                                                        <Typography className='resource-card-title'>+ 99 More</Typography>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section className='bg--secondary' id='acrossInternet'>
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11}>
                            <Box py={5}>
                                <Grid container spacing={{ xs: 2, sm: 4 }} alignItems="center">
                                    <Grid item xs={12} sm={6}>
                                        <Typography variant='h2' className='text-white sectiontitle'>Collection Of Resources<br />That Stands Out From The Rest</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Card className='acrossCard'>
                                            <CardContent>
                                                <Typography className='across-card-title'>Carefully Crafted, Non-Generic Content</Typography>
                                                <Typography className='text-white'>Our vast collection of content in our library is designed to help you navigate the complex field of search engine optimization.</Typography>
                                                <Typography className='text-white'>Our resources are suitable for users of all skill levels, from novices to seasoned pros.</Typography>
                                                <Box>
                                                    <List>
                                                        <ListItem>
                                                            <ListItemIcon><Circle className='text-white' sx={{ fontSize: "0.3rem" }} /></ListItemIcon>
                                                            <ListItemText primary="Guides" />
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon><Circle className='text-white' sx={{ fontSize: "0.3rem" }} /></ListItemIcon>
                                                            <ListItemText primary="PDFs" />
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon><Circle className='text-white' sx={{ fontSize: "0.3rem" }} /></ListItemIcon>
                                                            <ListItemText primary="Tools" />
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon><Circle className='text-white' sx={{ fontSize: "0.3rem" }} /></ListItemIcon>
                                                            <ListItemText primary="Spreadsheets" />
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon><Circle className='text-white' sx={{ fontSize: "0.3rem" }} /></ListItemIcon>
                                                            <ListItemText primary="And much more" />
                                                        </ListItem>
                                                    </List>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} sm={6}></Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Card className='acrossCard'>
                                            <CardContent>
                                                <Typography className='across-card-title'>Actionable Stuff Only</Typography>
                                                <Typography className='text-white mb-4'>Say NO to boring lectures! </Typography>
                                                <Typography className='text-white mb-4'>We emphasize the importance of practicality and actionability.</Typography>
                                                <Typography className='text-white mb-4'>Our spreadsheet tools, PDFs, and manuals are all designed to be extremely useful so you can start using the ideas right away.</Typography>
                                                <Typography className='text-white mb-4'>You are welcome to copy spreadsheet tools and include them in your own work.</Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} sm={6}></Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Card className='acrossCard'>
                                            <CardContent>
                                                <Typography className='across-card-title'>FREE for You, Forever</Typography>
                                                <Typography className='text-white mb-4'>We are dedicated to serving the SEO community and are providing these resources at NO CHARGE.</Typography>
                                                <Typography className='text-white mb-4'>Don't forget to share these with your peers after downloading and using them at your convenience.</Typography>
                                                <Typography className='text-white mb-4'>Come along while we improve the state of SEO expertise.</Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default Resource