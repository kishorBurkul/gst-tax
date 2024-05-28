import React from 'react';
import { Grid, Typography, Accordion, AccordionSummary, AccordionDetails, TextField, Button, Divider, List, ListItemButton, ListItemIcon, ListItemText, Box, Paper, styled } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ContactForm from './ContactForm';
import FormComponent from './FormComponent';
const FoodLRegistration = () => {

    const Overlay = styled(Box)({
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    });

    const HeaderImage = styled('img')({
        width: '100%',
        marginTop: '10px',
        height: '256px', // h-64 in Tailwind
        '@media (min-width: 640px)': {
            height: '384px', // sm:h-96 in Tailwind
        },
        objectFit: 'cover',
    });
    return (
        <>
            <Box position="relative" overflow="hidden">
                <HeaderImage
                    src="assets/Registration/FoodLicenheader.jpg"
                    alt="Services Header"
                />
                <Overlay>
                    <Typography
                        variant="h4"
                        component="h5"
                        color="white"
                        fontWeight="bold"
                        align="center"
                    >
                        FSSAI Registration Services (FSSAI)
                    </Typography>
                </Overlay>
            </Box>

            {/* <Box className="relative overflow-hidden">
                <img
                    className="w-full mt-10  h-64 sm:h-96 object-cover"
                    src="assets/Registration/FoodLicenheader.jpg"
                    alt="Services Header"
                />

                <Box className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
                    <h1 className="text-4xl font-bold text-center">FSSAI Registration Services(FSSAI)</h1>
                </Box>
            </Box> */}

            <Grid container spacing={2} mt={0} p={2}
                justifyContent="center">
                <Grid item xs={12} md={8}  >
                    <Paper >
                        <Typography variant="h5" gutterBottom sx={{ textDecoration: "underline", textDecorationColor: "#fd5b03", mb: 2, color: "blue" }}><b>FSSAI Registration Services(FSSAI)</b></Typography>
                        <Divider />
                        <Typography variant="subtitle1" gutterBottom>
                            Food License Registration certificate is required to run a food product business. You have to register under Food Safety and Standards Authority of India (FSSAI) to manufacture, distribute and transport food products.
                        </Typography>
                        <Box mb={4}>


                            <Accordion sx={{ backgroundColor: "#dee2e6" }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel2-content" id="panel2-header" sx={{ backgroundColor: "#fd5b03", color: "white" }}>
                                    <Typography variant='h6'>Main Function Of FSSAI</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List component="div" disablePadding >
                                        <ListItemText sx={{ pl: 2 }}><b>Main Functions Of FSSAI
                                            FSSAI's main functions include: </b></ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Formulating and enforcing regulations for food safety and hygiene.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Granting licenses and registrations to food business operators (FBOs).</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Conducting inspections and audits of food businesses to ensure compliance with regulations.</ListItemText>
                                         <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Providing guidance and training to FBOs on food safety and hygiene practices.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Collaborating with state and local governments, as well as other stakeholders, to improve food safety and hygiene in India.</ListItemText>
                                   </List>
                                </AccordionDetails>
                            </Accordion>


                            <Accordion sx={{ backgroundColor: "#dee2e6" }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel2-content" id="panel2-header" sx={{ backgroundColor: "#fd5b03", color: "white" }}>
                                    <Typography variant='h6'>Benefits of FSSAI Registration </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List component="div" disablePadding >
                                        <ListItemText sx={{ pl: 2 }}><b>There are several benefits to obtaining FSSAI registration or license for a food business operator (FBO) in India:</b></ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Legal Compliance: FSSAI registration or license is mandatory as per the Food Safety and Standards Act, 2006, and failure to obtain it can result in penalties and fines.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Consumer Trust: FSSAI registration or license serves as an assurance to consumers that the food products being offered by the FBO are safe for consumption and of good quality.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Improved Business Image: FSSAI registration or license can enhance the reputation of the FBO and increase consumer confidence in their products.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Increased Market Access: FSSAI registration or license is often a prerequisite for participating in government procurement and tenders, as well as for exporting food products.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Easier Access to Financing: FSSAI registration or license can make it easier for FBOs to obtain loans or other forms of financing, as it serves as evidence of their compliance with legal and regulatory requirements.</ListItemText>
                                    
                                   </List>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion sx={{ backgroundColor: "#dee2e6" }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel2-content" id="panel2-header" sx={{ backgroundColor: "#fd5b03", color: "white" }}>
                                    <Typography variant='h6'>Procedure For FSSAI Registration </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List component="div" disablePadding >
                                        <ListItemText sx={{ pl: 2 }}><b>The procedure for obtaining FSSAI registration or license for a food business operator (FBO) in India typically involves the following steps:</b></ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Determine the type of registration or license required: FSSAI registration or license is required based on the type and scale of the food business. There are different categories of registration or license, such as Basic registration, State license and Central license.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Submit the application: Once you have determined the type of registration or license required, you can submit the application online or offline along with the necessary documents, such as proof of business address, details of food products and processing methods, and declarations regarding food safety and hygiene practices.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Inspection and Verification: After submitting the application, an FSSAI official will conduct an inspection of the food business premises to verify the information provided in the application.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Payment of fees: After the inspection, the FBO will have to pay the relevant fees for the registration or license.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Obtain the registration or license: Once the inspection and verification are complete and the fees have been paid, the FBO will be issued with the FSSAI registration or license certificate.</ListItemText>
                                         <Typography >Please note that the FSSAI registration or license is valid for a certain period of time and must be renewed before its expiry date.</Typography>
                                   </List>
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                    </Paper>
                </Grid>

                {/* Right Column (4 Grids) */}
                <Grid item xs={12} sm={8} md={3} >
                    <FormComponent />
                    {/* <Paper sx={{ padding: 4 }}>
                        <FormComponent />
                    </Paper> */}
                </Grid>
            </Grid>



        </>

    );
};

export default FoodLRegistration;
