import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { CardMedia } from '@mui/material';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     imageSection: {
//         height: 400,
//         backgroundImage: 'url("assets/loan-services/Business-Loan.png")',
//         backgroundSize: 'cover',
//         marginBottom: 100,
//     },
//     contentSection: {
//         margin: '0 100px',
//     },
//     card: {
//         maxWidth: 345,
//         margin: '16px', // Adjust the margin directly with numeric values
//     },
// }));
const usestyles = {
    root: {
        flexGrow: 1,
    },
    imageSection: {
        height: 400,
        backgroundImage: 'url("assets/loan-services/Business-Loan.png")',
        backgroundSize: 'cover',
        marginBottom: 100,
    },
    contentSection: {
        margin: '0 100px',
    },
    card: {
        maxWidth: 345,
        margin: '16px', // Adjust the margin directly with numeric values
    },
};


const MaternityHealthInsurance = () => {
    const benefits = [
        {
            title: '1.Car Insurance',
            image: "/assets/insurance/car_insu.svg",
            description: ['Car insurance plans offer protection to the vehicle against an accident, theft, natural calamity and other unforeseen circumstances that could incur financial losses. A car insurance policy covers third party liabilities as well.'
            ]
        },
        {
            title: '2.Two Wheeler Insurance',
            image: "/assets/insurance/bike.png",
            description: [
                'Bike Insurance or two wheeler insurance is a type of insurance, which safeguards you against the damage happening to your bike due to accidents, natural calamities and other unfortunate events. Bike Insurance policy covers the cost of treatment as well as third party liabilities.']
        },

        {
            title: '3.Commercial Vehicle Insurance',
            image: "/assets/insurance/Commercial-Veh-Truck.svg",
            description: ['Commercial vehicle insurance covers your commercial vehicle against different types of external damages like theft, accident, natural calamity along with personal as well third-party liabilities.']
        },
        // {
        //     title: '4.Travel Insurance',
        //     image: "/assets/insurance/habits.png",
        //     description: [
        //         'Provides coverage for travelers against unexpected events such as trip cancellations, medical emergencies, lost baggage, and travel delays while traveling domestically or internationally.']

        // },
        // {
        //     title: '5.Business Insurance:',
        //     image: "/assets/insurance/pre-existing-health.jpg",
        //     description: [
        //         'Offers various types of coverage to protect businesses from financial losses due to risks such as property damage, liability claims, business interruption, theft, and employee-related issues.']
        // },

    ];

  

    return (

        <div className={usestyles.root}>
            {/* Image Section */}
            {/* <div className={usestyles.imageSection} ></div> */}
            <div className="relative overflow-hidden">
                {/* Background Image */}
                <img
                    className="w-full h-64 sm:h-96 object-cover"
                    src="assets/insurance/maternity_helth_insrance_header.jpg"
                    alt="Services Header"
                />
                {/* Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
                    <h1 className="text-4xl font-bold text-center">Maternity Health Insurance </h1>
                </div>
            </div>

            {/* Content Section */}
            <Container className={usestyles.contentSection}>
                <Grid container spacing={3} sx={{ marginTop: { xs: 2, sm: 2 } }}>
                    {/* Left Content */}
                    <Grid item xs={12} sm={6} sx={{ order: { xs: 2, sm: 2, md: 1 } }}>
                        <Typography variant="h4" gutterBottom>
                            What Is Maternity Health Insurance?
                        </Typography>
                        <Typography variant="body1" paragraph>
                            A maternity insurance policy is a type of health insurance policy that covers the medical expenses for delivery, hospitalisation, and medicines. Parenthood is one of the most significant
                            life experiences for a couple. But given the rising medical cost, this stage can put you under some financial burden. This is exactly when a comprehensive health insurance for pregnant
                            women comes as a saviour. Maternity insurance helps expecting mothers get quality healthcare facilities without the financial burden.
                        </Typography>
                        {/* <Typography variant="body1" paragraph>
                        Motor insurance is a financial protection for cars, bikes, trucks, bus and other vehicles that covers damages to vehicles and liabilities arising from accidents, providing peace of mind to vehicle owners.
                        </Typography> */}
                        {/* <Typography variant="body1" paragraph>
                            Life insurance can be an essential part of financial planning, providing peace of mind and financial security to loved ones in the event of the insured's passing. It's typically recommended to assess one's financial needs and goals to determine the appropriate type and amount of life insurance coverage needed.
                        </Typography> */}

                    </Grid>

                    {/* Right Image */}
                    <Grid item xs={12} sm={12} md={6} sx={{ order: { xs: 1, sm: 1, md: 2 } }} >
                        <img
                            src="assets/insurance/maternity_health.jpeg"
                            alt="Right Content"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                marginBottom: { xs: 4, sm: 8 }, // Adjust margin for different screen sizes
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>

            {/* Cards Section */}
            {/* <Container maxWidth="lg" style={{ marginTop: "20px" }}>
                <Typography variant="h4" component="h3" display="flex" justifyContent="center">
                    Type Of Motor Insurance
                </Typography>
                <Grid container spacing={3} sx={{ marginTop: "5px" }}>
                    {benefits.map((benefit, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                            <Card sx={cardStyle}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={benefit.image}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography variant="h6" component="div" sx={titleStyle}>
                                            {benefit.title}
                                        </Typography>
                                        <Typography variant="body2" paragraph sx={descriptionStyle}>
                                            <b>{benefit.description}</b>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container> */}
            <Container className={usestyles.contentSection}>
                <Grid container spacing={3} sx={{ marginTop: { xs: 2, sm: 2 } }}>
                    <Grid item xs={12} sm={12} md={6} sx={{ marginTop: { xs: 2, sm: 2 } }} >
                        <img
                            src="assets/insurance/maternity_beneifits.AVIF"
                            alt="Right Content"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                marginBottom: { xs: 4, sm: 8 }, // Adjust margin for different screen sizes
                            }}
                        />
                    </Grid>

                    {/* Left Content */}
                    <Grid item xs={12} sm={6} sx={{ marginTop: { xs: 2, sm: 2 } }}>
                        <Typography variant="h5" gutterBottom>

                            Key Benefits of Maternity Health Insurance
                        </Typography>
                        <Typography variant="body1" paragraph>
                           Maternity Health Insurance offer several key benefits
                        </Typography>
                        <ul sx={{
                            listStyleType: 'disc',

                            paddingLeft: { xs: 2, sm: 2, md: 4 }, // Adjust the padding for different screen sizes
                        }}>
                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>

                                    Coverage for Prenatal Care
                                </span>
                            </li>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Hospitalization Expenses
                                </span>
                            </li>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Delivery Costs
                                </span>
                            </li>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Postnatal Care
                                </span>
                            </li>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Coverage for Newborns
                                </span>
                            </li>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Financial Protection
                                </span>
                            </li>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>

                                    Access to Quality Healthcare
                                </span>
                            </li>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Peace of Mind
                                </span>
                            </li>

                            {/* <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Peace of Mind
                                </span>
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Convenience and Support
                                </span>
                            </li> */}
                        </ul>
                    </Grid>

                    {/* Right Image */}

                </Grid>
            </Container>

            <Container className={usestyles.contentSection}>
                <Grid container spacing={3} sx={{ marginTop: { xs: 2, sm: 2 } }}>
                    {/* Left Content */}
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5" gutterBottom>
                            Documents Required For   Maternity Health Insurance
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            When applying for a   Maternity Health Insurance, you typically need the following documents
                        </Typography>
                        <ul sx={{
                            listStyleType: 'disc',

                            paddingLeft: { xs: 2, sm: 2, md: 4 }, // Adjust the padding for different screen sizes
                        }}>
                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Application Form
                                </span>
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Proof of Identity
                                </span>
                            </li>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Proof of Age
                                </span>
                            </li>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Marriage Certificate
                                </span>
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Medical Reports
                                </span>
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Pregnancy Confirmation
                                </span>
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Income Proof
                                </span>
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Bank Account Details
                                </span>
                            </li>
                            {/* <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Additional Driver Details
                                </span>
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Bank Account Details
                                </span>
                            </li> */}
                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Previous Insurance Details
                                </span>
                            </li>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Any Other Required Documents
                                </span>
                            </li>


                        </ul>
                    </Grid>

                    {/* Right Image */}
                    <Grid item xs={12} sm={12} md={6} sx={{ marginTop: { xs: 2, sm: 2 } }} >
                        <img
                            src="assets/insurance/Maternity-Health-Insurance-document.jpg"
                            alt="Right Content"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                marginBottom: { xs: 4, sm: 8 }, // Adjust margin for different screen sizes
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>

            <Container className={usestyles.contentSection}>
                <Grid container spacing={3} sx={{ marginTop: { xs: 2, sm: 2 } }}>
                    <Grid item xs={12} sm={12} md={6} sx={{ marginTop: { xs: 2, sm: 2, order: { xs: 1, sm: 1 } } }} >
                        <img
                            src="assets/insurance/top_10_comp.png"
                            alt="Right Content"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                marginBottom: { xs: 4, sm: 8 }, // Adjust margin for different screen sizes
                            }}
                        />
                    </Grid>

                    {/* Left Content */}
                    <Grid item xs={12} sm={6} sx={{ marginTop: { xs: 2, sm: 2, order: { xs: 2, sm: 2 } } }}>
                        <Typography variant="h5" gutterBottom>
                            We Provide A List Of The Top 10  Maternity Health Insurance Companies
                        </Typography>
                        {/* <Typography variant="body1" paragraph>
                         Health insurance plans offer several key benefits, providing financial protection and peace of mind for individuals and families. Here are some of the primary benefits
                        </Typography> */}
                        <ul sx={{
                            listStyleType: 'disc',

                            paddingLeft: { xs: 2, sm: 2, md: 4 }, // Adjust the padding for different screen sizes
                        }}>
                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>

                                    1.Star Health and Allied Health Insurance
                                </span>
                            </li>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    2.Care Health Insurance
                                </span>
                            </li>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    3.Niva Bupa Health Insurance
                                </span>
                            </li>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    4.HDFC Ergo Health Insurance
                                </span>
                            </li>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    5.ICICI Lambard Health Insurance
                                </span>
                            </li>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    6. Aditya Birla Health Insurance
                                </span>
                            </li>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>

                                    7. Manipal Cigna Health Insurance
                                </span>
                            </li>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    8.TATA AIG Health Insurance
                                </span>
                            </li>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    9.SBI Health Insurance
                                </span>
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    10.ACKO Health Insurance

                                </span>
                            </li>
                            {/* <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    10.SBI General Home Insurance Company Limited

                                </span>
                            </li> */}
                        </ul>
                    </Grid>

                    {/* Right Image */}

                </Grid>
            </Container>
        </div>
    );
};

export default MaternityHealthInsurance;
