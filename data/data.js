import HeaderIconOne from "/public/header-hover-icon-one.svg";
import HeaderIconTwo from "/public/header-hover-icon-two.svg";
import HeaderIconThree from "/public/header-hover-icon-three.svg";
import HeaderIconFour from "/public/header-hover-icon-four.svg";
import HeaderIconFive from "/public/header-hover-icon-five.svg";
import HeaderIconSix from "/public/header-hover-icon-six.svg";
import HeaderIconSeven from "/public/header-hover-icon-seven.svg";
import HeaderIconEight from "/public/header-hover-icon-eight.svg";

import LinkedInIcon from "/public/linkedin-logo.svg";
import FacebookIcon from "/public/facebook-logo.svg";
import WebsiteIcon from "/public/website-logo.svg";
import YoutubeIcon from "/public/youtube-logo.svg";

// import EADIconOne from "/public/solutions/exclusive-ai-driven-icon-one.svg";
// import EADIconTwo from "/public/solutions/exclusive-ai-driven-icon-two.svg";
// import EADIconThree from "/public/solutions/exclusive-ai-driven-icon-three.svg";

// import OVIconOne from "/public/solutions/overcoming-common-icon-one.svg";
// import OVIconTwo from "/public/solutions/overcoming-common-icon-two.svg";

// import FTCIconOne from "/public/solutions/factors-to-consider-icon-one.svg";
// import FTCIconTwo from "/public/solutions/factors-to-consider-icon-two.svg";
// import FTCIconThree from "/public/solutions/factors-to-consider-icon-three.svg";
// import FTCIconFour from "/public/solutions/factors-to-consider-icon-four.svg";

// import RBIconOne from "/public/solutions/revolutionizing-business-icon-one.svg";
// import RBIconTwo from "/public/solutions/revolutionizing-business-icon-two.svg";
// import RBIconThree from "/public/solutions/revolutionizing-business-icon-three.svg";

// import AFIconOne from "/public/solutions/ai-features-icon-one.svg";
// import AFIconTwo from "/public/solutions/ai-features-icon-two.svg";
// import AFIconThree from "/public/solutions/ai-features-icon-three.svg";
// import AFIconFour from "/public/solutions/ai-features-icon-four.svg";
// import AFIconFive from "/public/solutions/ai-features-icon-five.svg";
// import AFIconSix from "/public/solutions/ai-features-icon-six.svg";

// import AKCIconOne from "/public/solutions/ai-key-capabilities-icon-one.svg";
// import AKCIconTwo from "/public/solutions/ai-key-capabilities-icon-two.svg";
// import AKCIconThree from "/public/solutions/ai-key-capabilities-icon-three.svg";
// import AKCIconFour from "/public/solutions/ai-key-capabilities-icon-four.svg";
// import AKCIconFive from "/public/solutions/ai-key-capabilities-icon-five.svg";

// import AMBIconOne from "/public/solutions/ai-major-benefits-icon-one.svg";
// import AMBIconTwo from "/public/solutions/ai-major-benefits-icon-two.svg";
// import AMBIconThree from "/public/solutions/ai-major-benefits-icon-three.svg";
// import AMBIconFour from "/public/solutions/ai-major-benefits-icon-four.svg";
// import AMBIconFive from "/public/solutions/ai-major-benefits-icon-five.svg";
// import AMBIconSix from "/public/solutions/ai-major-benefits-icon-six.svg";

// import AUCIconOne from "/public/solutions/ai-use-cases-icon-one.svg";
// import AUCIconTwo from "/public/solutions/ai-use-cases-icon-two.svg";
// import AUCIconThree from "/public/solutions/ai-use-cases-icon-three.svg";
// import AUCIconFour from "/public/solutions/ai-use-cases-icon-four.svg";
// import AUCIconFive from "/public/solutions/ai-use-cases-icon-five.svg";
// import AUCIconSix from "/public/solutions/ai-use-cases-icon-six.svg";

// import SWIconOne from "/public/resources/seamless-workflow-icon-one.svg";
// import SWIconTwo from "/public/resources/seamless-workflow-icon-two.svg";
// import SWIconThree from "/public/resources/seamless-workflow-icon-three.svg";

// import SIIconOne from "/public/resources/seamless-integration-icon-one.svg";
// import SIIconTwo from "/public/resources/seamless-integration-icon-two.svg";
// import SIIconThree from "/public/resources/seamless-integration-icon-three.svg";

// import MDIconOne from "/public/resources/microsoft-dynamics-365-icon-one.svg";
// import MDIconTwo from "/public/resources/microsoft-dynamics-365-icon-two.svg";
// import MDIconThree from "/public/resources/microsoft-dynamics-365-icon-three.svg";

// import USAMap from "/public/contact/usa-map-image.png";
// import PakistanMap from "/public/contact/pakistan-map-image.png";

//* Home Page Data */

// header dropdown menu data
export const solutionsData = [
  {
    icon: HeaderIconOne,
    linkName: "Benefits",
    linkDescription: "Simplified Procurement and Collaboration",
    link: "/solutions/benefits",
  },
  {
    icon: HeaderIconTwo,
    linkName: "Capabilities",
    linkDescription: "Efficient, Collaborative, Scalable Solutions",
    link: "/solutions/capabilities",
  },
  {
    icon: HeaderIconThree,
    linkName: "Insights",
    linkDescription: "Actionable Data, Smarter Decisions",
    link: "/solutions/insights",
  },
  {
    icon: HeaderIconFour,
    linkName: "AI Solutions",
    linkDescription: "Intelligent, Scalable, Data-Driven Insights",
    link: "/solutions/ai-solutions",
  },
];

export const resourcesData = [
  {
    icon: HeaderIconFive,
    linkName: "Integration",
    linkDescription: "Seamless Connectivity and Efficiency",
    link: "/resources/integration",
  },
  {
    icon: HeaderIconSix,
    linkName: "Documentation",
    linkDescription: "Comprehensive Guides and Resources",
    link: "https://cpdoc.kaispe.com/#introduction",
  },
  {
    icon: HeaderIconSeven,
    linkName: "FAQs",
    linkDescription: "Answers Frequently Asked Questions",
    link: "/resources/faqs",
  },
  {
    icon: HeaderIconEight,
    linkName: "Blogs",
    linkDescription: "Sharing Insights, Stories, and Ideas",
    link: "/resources/blogs",
  },
];

// mobile menu data
export const mobileNavLinks = [
  { href: "/", label: "Home" },
  { href: "/industries", label: "Industries" },
  {
    label: "Solutions",
    submenu: [
      { href: "/solutions/benefits", label: "Benefits" },
      { href: "/solutions/capabilities", label: "Capabilities" },
      { href: "/solutions/insights", label: "Insights" },
      { href: "/solutions/aisolutions", label: "AI Solutions" },
    ],
  },
  {
    label: "Resources",
    submenu: [
      { href: "/resources/integration", label: "Integration" },
      {
        href: "https://cpdoc.kaispe.com/#introduction",
        label: "Documentation",
        external: true,
      },
      { href: "/resources/faq", label: "FAQs" },
      { href: "/resources/blogs", label: "Blogs" },
    ],
  },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
  {
    href: "https://kspcs.powerappsportals.com",
    label: "Support Portal",
    external: true,
  },
];

// available marketplaces section data
/* export const availableMarketplaces = [
  {
    icon: AMIconOne,
    title: "Microsoft Azure Marketplace",
    href: "https://azuremarketplace.microsoft.com/en-us/marketplace/apps/kaispellc.kspcportal-am?tab=Overview",
    bgColor: "#F8EAE4",
  },
  {
    icon: AMIconOne,
    title: "Microsoft AppSource",
    href: "https://appsource.microsoft.com/en-us/product/web-apps/kaispellc.kspcportal-am?tab=Overview",
    bgColor: "#D0ECFC",
  },
  {
    icon: AMIconThree,
    title: "Software Advice",
    href: "https://www.softwareadvice.com/portal/customer-portal-profile/",
    bgColor: "#F9EEE7",
  },
  {
    icon: AMIconFour,
    title: "Get App",
    href: "https://www.getapp.com/it-management-software/a/customer-portal/",
    bgColor: "#F1F3F8",
  },
  {
    icon: AMIconFive,
    title: "TrustRadius",
    href: "https://www.trustradius.com/products/kaispe-customer-portal/pricing",
    bgColor: "#E2EAF4",
  },
  {
    icon: AMIconSix,
    title: "Get from G2",
    href: "https://www.g2.com/products/customer-portal/reviews",
    bgColor: "#F9E8EA",
  },
  {
    icon: AMIconSeven,
    title: "Capterra",
    href: "https://www.capterra.com/p/10011833/Customer-Portal/",
    bgColor: "#E1ECFE",
  },
  {
    icon: AMIconEight,
    title: "AWS Marketplace",
    href: "#",
    bgColor: "#F8EDE9",
  },
  {
    icon: AMIconNine,
    title: "SaaSHub",
    href: "https://www.saashub.com/kaispe-customer-portal",
    bgColor: "#35478c14",
  },
]; */

// meet all the customer needs section data
/* export const meetCustomerNeeds = [
  {
    icon: MCNIconOne,
    bgColor: "#2ECEA8",
    title: "Enhanced Customer Experience",
    description:
      "Improve collaboration and communication to strengthen your customer relationships. We reduce the sales team’s workload and automate repetitive tasks for exceptional experiences",
  },
  {
    icon: MCNIconTwo,
    bgColor: "#FEAD44",
    title: "Self-Service Experience that Empowers Clients",
    description:
      "With KAISPE's intuitive Customer Portal, it's easy to eliminate the need for constant support, enhancing operational efficiency, and saving valuable time",
  },
  {
    icon: MCNIconThree,
    bgColor: "#FF00FF",
    title: "Complete Customer's View at a Glance",
    description:
      "Get useful customer insights that help you understand customer behavior so you can provide tailored solutions and increase overall customer satisfaction",
  },
  {
    icon: MCNIconFour,
    bgColor: "#5580FF",
    title: "Deliver a Modern Customer Experience",
    description:
      "The KAISPE Customer Portal evolves with your customers, ensuring every interaction is smooth, intuitive, and future-ready.",
  },
]; */

// streamlined order management section data
/* export const streamlinedOrderManagement = [
  {
    icon: SOMIconOne,
    title: "Real-time Order Tracking",
    description:
      "Clients can track shipments and view their order history through the portal",
  },
  {
    icon: SOMIconTwo,
    title: "Automated Client Portal",
    description: "Systemize all invoicing, inventory, and approvals.",
  },
  {
    icon: SOMIconThree,
    title: "Easy Order Management",
    description:
      "Easily manage and fulfill customer orders with our intuitive order tracking portal. Reduce errors, improve operations, and boost customer satisfaction.",
  },
]; */

// e-commerce capabilities section data
/* export const eCommerceCapabilities = [
  {
    icon: ECIconTwo,
    bgColor: "#473BF0",
    title: "Increase Sales and Expand Your Customer Base",
    description:
      "Ensure maximum client satisfaction that leads to customer retention. The KAISPE Client Portal Software helps you drive revenue and build stronger relationships.",
  },
  {
    icon: ECIconOne,
    bgColor: "#FEAD44",
    title: "Client Payment Portal",
    description:
      "Secure credit card processing, digital wallets, and automated tax calculations.",
  },
]; */

// better smart solutions section data
export const betterSmartSolutions = [
  {
    question: "Increased Client Retention",
    answer:
      "Providing clients with the highest level of convenience and satisfaction, and increasing sales",
  },
  {
    question: "Visualize Data with Clarity",
    answer:
      "Make better decisions faster with graphs, charts, and dashboards that highlight key insights at a glance.",
  },
  {
    question: "Monitor Performance",
    answer: "Track your  order from scratch. From creation to dispatch.",
  },
  {
    question: "Analytics",
    answer:
      "Collect, process, and interpret data to identify patterns and trends that drive smarter, more informed decisions.",
  },
  {
    question: "Easy-to-Use Platform",
    answer:
      "It is an intuitive, user-friendly platform that ensures an exceptional user experience and easy navigation.",
  },
  {
    question: "Data Representation",
    answer:
      "Organize and display data in an organized way for easy analysis and interpretation.",
  },
];

// give your clients section data
/* export const giveYourClients = [
  {
    icon: GYCIconOne,
    description:
      "Empowering clients with self-service tools helps businesses reduce routine phone and email support requests.",
  },
  {
    icon: GYCIconTwo,
    description:
      "By reducing basic inquiries, support teams can dedicate more time to resolving complex issues and enhancing the overall client experience.",
  },
  {
    icon: GYCIconThree,
    description:
      "With direct access to their information, clients can make updates, which reduces errors and improves communication accuracy.",
  },
]; */

// easily access quotes section data
/* export const easilyAccessQuotes = [
  {
    icon: EAQIconOne,
    title: "Minimize Payment Risks",
    description:
      "Reduce the likelihood of missed payments or late fees by giving clients the tools to manage their payments efficiently, benefiting both your business and customers",
  },
  {
    icon: EAQIconTwo,
    title: "Enhance Operational Efficiency",
    description:
      "Boost operational efficiency by empowering clients to manage their accounts and data through a self-service portal, reducing the demand on your team.",
  },
  {
    icon: EAQIconThree,
    title: "Self-Service Information Access",
    description:
      "Provide clients with quick access to the information they need, minimizing the need for direct contact and freeing up your team to focus on more complex issues.",
  },
]; */

// industries we serve section data
/* export const industriesWeServe = [
  {
    image: IWSImageOne,
    title: "Retail",
  },
  {
    image: IWSImageTwo,
    title: "Distribution",
  },
  {
    image: IWSImageThree,
    title: "Construction",
  },
  {
    image: IWSImageFour,
    title: "Public Sector",
  },
  {
    image: IWSImageFive,
    title: "Mining",
  },
  {
    image: IWSImageSix,
    title: "Manufacturing",
  },
  {
    image: IWSImageSeven,
    title: "Automotive",
  },
  {
    image: IWSImageEight,
    title: "Healthcare",
  },
  {
    image: IWSImageNine,
    title: "Technology",
  },
  {
    image: IWSImageTen,
    title: "Fashion & Apparel",
  },
]; */

// footer social links data
export const socialMediaLinks = [
  {
    link: "https://www.linkedin.com/company/kaispe",
    icon: LinkedInIcon,
    alt: "linkedin icon",
  },
  {
    link: "https://www.facebook.com/Kaispeco",
    icon: FacebookIcon,
    alt: "facebook icon",
  },
  {
    link: "https://www.kaispe.com/",
    icon: WebsiteIcon,
    alt: "website icon",
  },
  {
    link: "https://www.youtube.com/@kaispe",
    icon: YoutubeIcon,
    alt: "youtube icon",
  },
];

//* Industries Page Data */

// inustry features section data
/* export const industryFeatures = [
  {
    image: IFImageOne,
    title: "Retail",
    description:
      "With KAISPE, retailers can simplify their procurement processes, gain valuable insights into product trends, and manage inventory with ease. Stay ahead of the competition by improving operational efficiency, enhancing customer experiences, and optimizing supply chains.",
  },
  {
    image: IFImageTwo,
    title: "Distribution",
    description:
      "KAISPE boosts logistics efficiency for distributors by offering real-time tracking, automated order management, and seamless communication with suppliers. Manage stock levels, orders, and deliveries with ease, ensuring timely fulfillment and reducing operational delays.",
    link: "",
  },
  {
    image: IFImageThree,
    title: "Construction",
    description:
      "In the fast-paced construction industry, KAISPE ensures that materials are delivered on time and that your operations remain compliant with safety standards. Whether you're managing complex project timelines or coordinating with multiple suppliers, KAISPE helps you stay organized and efficient.",
    link: "",
  },
  {
    image: IFImageFour,
    title: "Public Sector",
    description:
      "KAISPE helps public sector organizations improve procurement workflows, making the process more efficient and transparent. Whether it's managing contracts, tracking supplier performance, or ensuring accountability, KAISPE empowers government agencies and non-profits to streamline operations and improve public service delivery.",
    link: "",
  },
  {
    image: IFImageFive,
    title: "Mining",
    description:
      "The mining industry requires managing complex supplier relationships while adhering to strict regulatory standards. KAISPE simplifies these processes by providing a centralized platform to manage orders, track compliance, and communicate with suppliers, all while keeping operations running smoothly.",
    link: "",
  },
  {
    image: IFImageSix,
    title: "Manufacturing",
    description:
      "For manufacturers, maintaining a steady flow of materials is crucial to avoid production delays. KAISPE helps you manage supplier relationships more effectively, ensuring that orders are processed quickly, materials are delivered on time, and inventory is always well-stocked.",
    link: "",
  },
  {
    image: IFImageSeven,
    title: "Automotive",
    description:
      "In the automotive industry, timely procurement of parts and components is critical to keeping production lines running smoothly. KAISPE simplifies the procurement process, ensuring parts are sourced and delivered on time, so you can focus on manufacturing and meeting customer demands.",
    link: "",
  },
  {
    image: IFImageEight,
    title: "Fashion & Apparel",
    description:
      "KAISPE helps fashion and apparel businesses manage seasonal collections, ensure quality control, and stay agile in response to industry trends. With better visibility into inventory, supplier relationships, and customer preferences, your business can stay on the cutting edge of fashion.",
    link: "",
  },
]; */

// why kaispe industry section data
/* export const whyChooseKaispe = [
  {
    icon: WCKIconOne,
    title: "Seamless integration",
    description: "with existing workflows.",
  },
  {
    icon: WCKIconTwo,
    title: "Real-time insights",
    description: "and analytics to optimize operations.",
  },
  {
    icon: WCKIconThree,
    title: "Scalable solutions",
    description: "designed to grow with your business.",
  },
  {
    icon: WCKIconFour,
    title: "Improved communication",
    description: "with suppliers, customers, and teams.",
  },
]; */

//* Inside Solution Pages Data */

// benefit features section data
/* export const benefitFeatures = [
  {
    icon: BFIconOne,
    title: "Streamlined Order Management",
    description:
      "Entrepreneur customers to access, track, and monitor their orders easily through the portal. With multiple business customers can follow every single of the local, process, ensuring a seamless experience and reducing its need for manual updates.",
  },
  {
    icon: BFIconTwo,
    title: "End-to-End eCommerce Functionality",
    description:
      "Risks your online sales with enterprise eCommerce capabilities, including engaging cart management. Provide a seamless, all-in-one shipping experience for your customers, from product selection to payment, ensuring a smooth transaction every time.",
  },
  {
    icon: BFIconThree,
    title: "Automated Workflows to Save Time & Money",
    description:
      "Reduce your operational costs and minimize manual error by automatically sign internal processes. From dealer processing to invoicing, automation, mutual efficiency, accuracy, and faster harnessed times, allowing your team to focus on higher work rates.",
  },
  {
    icon: BFIconFour,
    title: "24/7 Customer Self-Service",
    description:
      "Allow your customers to store content as 24/7 access to their data and account details via the portal, wherever it is pending an order. Checking payment assets, or viewing invoices, your customers can access everything they need from any device, at any time.",
  },
  {
    icon: BFIconFive,
    title: "Enhanced Customer Service & Engagement",
    description:
      "Breeds your customer support with professional, proactive engagement, by offering easy access to account information, customers feel more confident and informed, improving satisfaction and loyalty.",
  },
  {
    icon: BFIconSix,
    title: "User-Friendly Portal Management",
    description:
      "The ASAPE portal is designed to be easy-to-use, allowing you to modify and manage the system independently, whether you’re dealing new features or adjusting settings, managing the portal is leader-free.",
  },
  {
    icon: BFIconSeven,
    title: "Simplified Online Payments",
    description:
      "Make transactions simple and secure. Customers can pay invoices online using a variety of payment methods, including signs, paying text credit cards, with flexible payment options, you can ensure a smooth, functioning payment experience.",
  },
  {
    icon: BFIconEight,
    title: "Instant Access to Transaction History",
    description:
      "Provide customers with a clear overview of all transactions, enabling them to see orders, invoices, credit names, and payment history at a glance. This transparency builds trust and reduces customer queries.",
  },
  {
    icon: BFIconNine,
    title: "Easy Access to Quotes & Account Information",
    description:
      "Customers can freely view quotes, past transactions, and upcoming payments—all in one place. This second-hand quotes means communication and allows your customers to make informed decisions quickly.",
  },
  {
    icon: BFIconTen,
    title: "Manage Orders, Invoices, & Payments Effortlessly",
    description:
      "Enable customers to view and pay existing invoice directly from the portal. With the ability to accept other details, invoices, and credit names at any time, your customers can manage their accounts with ease.",
  },
  {
    icon: BFIconEleven,
    title: "Save Time & Money",
    description:
      "By offering self-service options, customers can access the information they need without relying on your team. This makes it the volume of phone and email inquiries, saving both time and resources while enhancing the overall customer experience.",
  },
]; */

// capability features section data
/* export const capabilityFeatures = [
  {
    icon: CFIconOne,
    bgColor: "#2ECEA8",
    title: "Flexible Language Options",
    description:
      "The KAISPE Customer Portal supports multiple languages, offering a personalized experience for users in their preferred language. Manage global operations more effectively by catering to international customers with ease and ensuring smooth communication across regions.",
  },
  {
    icon: CFIconTwo,
    bgColor: "#FEAD44",
    title: "Payment Integration for Seamless Transactions",
    description:
      "Make transactions smooth and secure with integrated payment solutions like PayPal, Stripe, and other popular payment gateways. Customers can pay invoices directly within the portal using their preferred payment method, ensuring a seamless and user-friendly checkout process. Stay on top of all payments and manage financial transactions effortlessly.",
  },
  {
    icon: CFIconThree,
    bgColor: "#FF00FF",
    title: "Import and Export with Ease",
    description:
      "Quickly import and export key data—products, quotes, and orders—saving valuable time and reducing manual effort. Whether you're importing customer data or exporting orders to fulfillment centers, this feature makes bulk processing simple and efficient.",
  },
  {
    icon: CFIconFour,
    bgColor: "#5580FF",
    title: "Invoicing and Payment Management",
    description:
      "Generate invoices on the fly and send them directly to your customers from the portal. With automated invoicing features, your team saves time while customers can view, download, and pay invoices securely via Stripe or PayPal. No more manual invoicing or delays—everything is streamlined for ease of use.",
  },
  {
    icon: CFIconFive,
    bgColor: "#2ECEA8",
    title: "Customer Profile Management",
    description:
      "Maintain an organized, centralized record of all customer information. From contact details to purchase history and preferences, your team can easily track and update profiles to personalize customer interactions and improve service quality.",
  },
  {
    icon: CFIconSix,
    bgColor: "#FEAD44",
    title: "Roles & Permissions Configurations",
    description:
      "Set up custom roles and permissions to control access within the portal. Ensure that the right people have access to the right data, whether it's a customer, warehouse manager, or sales representative. You can assign granular roles to protect sensitive information and ensure smooth, secure operations.",
  },
  {
    icon: CFIconSeven,
    bgColor: "#FF00FF",
    title: "User Authentication & Security",
    description:
      "Prioritize security with robust user authentication features. From secure login processes to Single Sign-On (SSO) configuration, your portal will protect sensitive data, ensuring that only authorized users can access your systems.",
  },
  {
    icon: CFIconEight,
    bgColor: "#5580FF",
    title: "Warehouse, Site & Setup Data Configuration",
    description:
      "Easily configure warehouse, site, and other business-related data in the portal. Tailor the platform to your unique business needs, whether it's adding new warehouse locations, managing inventory, or setting up custom sites for specific regions.",
  },
  {
    icon: CFIconNine,
    bgColor: "#2ECEA8",
    title: "Real-Time Dashboard and Analytics",
    description:
      "Gain deeper insights into your business performance with a powerful dashboard. The real-time analytics engine allows you to monitor key metrics, such as sales performance, order statuses, inventory levels, and customer activity, all in one place. Generate reports to track KPIs, identify trends, and make data-driven decisions.",
  },
  {
    icon: CFIconTen,
    bgColor: "#FEAD44",
    title: "Order Management & Reporting",
    description:
      "Import and export orders with ease. Clone orders to quickly replicate successful transactions or recurring orders. Additionally, generate customized reports on orders, payments, and customer interactions to help you understand your business better and plan for future growth.",
  },
  {
    icon: CFIconEleven,
    bgColor: "#FF00FF",
    title: "Comprehensive Product & Inventory Management",
    description:
      "Efficiently manage products and inventory with a dedicated product section. From adding new products to updating existing inventory, everything is easily accessible. Real-time updates allow you to track stock levels, manage backorders, and ensure your customers always get what they need. Bulk product imports and exporting are also available for fast updates.",
  },
  {
    icon: CFIconTwelve,
    bgColor: "#5580FF",
    title: "Customer Statements & Payment History",
    description:
      "Empower customers to view and generate statements and track their payment history directly within the portal. This feature enhances transparency, reduces customer service queries, and fosters trust by providing clear, accessible financial records.",
  },
  {
    icon: CFIconThirteen,
    bgColor: "#2ECEA8",
    title: "Seamless ERP Integration",
    description:
      "Integrate your portal seamlessly with other ERP systems to centralize all your business data in one place. Improve workflow, reduce data silos, and streamline operations between your customer portal, inventory system, and other critical business applications.",
  },
  {
    icon: CFIconFourteen,
    bgColor: "#FEAD44",
    title: "Support Availability and Communication",
    description:
      "Provide top-notch customer service through real-time support availability within the portal. Offer live chat, AI-powered chatbot assistance, or quick access to customer service representatives, ensuring that help is always available when your customers need it.",
  },
  {
    icon: CFIconFifteen,
    bgColor: "#FF00FF",
    title: "Documentation Sharing",
    description:
      "Easily share important documents, invoices, contracts, and product information with secure, centralized access. Ensure your team and stakeholders always have the latest information, reducing delays and improving communication.",
  },
]; */

// empowering your business section data
/* export const empoweringYourBusiness = [
  {
    icon: EYBIconOne,
    title: "Predictive Analytics",
    description:
      "Anticipate customer needs and optimize decision-making processes.",
  },
  {
    icon: EYBIconTwo,
    title: "Smart Automation",
    description:
      "Use AI to automate routine tasks, improving efficiency and reducing errors.",
  },
  {
    icon: EYBIconThree,
    title: "Personalized Customer Experiences",
    description:
      "Leverage AI to deliver tailored solutions and recommendations.",
  },
  {
    icon: EYBIconFour,
    title: "Dynamic Language Processing",
    description:
      "AI-powered translation and communication tools for seamless global operations.",
  },
]; */

// exclusive ai driven section data
/* export const exclusiveAIDriven = [
  {
    icon: EADIconOne,
    description: "AI-enhanced data analysis for actionable insights.",
  },
  {
    icon: EADIconTwo,
    description: "Adaptive workflows based on real-time data trends",
  },
  {
    icon: EADIconThree,
    description:
      "Machine learning integrations to continuously improve operations",
  },
]; */

// overcoming common section data
/* export const overcomingCommon = [
  {
    heading: "Data Organization",
    iconOne: OVIconOne,
    titleOne: "Challenge",
    descriptionOne:
      "A disorganized portal can frustrate users and lead to poor adoption rates. If information isn't easy to find or properly categorized, it creates unnecessary complexity for both customers and internal teams.",
    iconTwo: OVIconTwo,
    titleTwo: "How KAISPE Solves This",
    descriptionTwo:
      "KAISPE excels in data management by ensuring that all information is neatly categorized and easily navigable. Whether it's orders, invoices, inventory, or customer profiles, our system ensures that data is accessible, well-organized, and simple to find—creating an optimal user experience and reducing the need for manual data retrieval.",
  },
  {
    heading: "Encouraging Portal Use",
    iconOne: OVIconOne,
    titleOne: "Challenge",
    descriptionOne:
      "Simply launching a portal isn't enough. Encouraging customers to actively use the portal requires a compelling value proposition and regular engagement",
    iconTwo: OVIconTwo,
    titleTwo: "How KAISPE Solves This",
    descriptionTwo:
      "We focus on providing a user-friendly interface and a seamless onboarding experience, ensuring customers quickly realize the value of the portal. With features like 24/7 access to accounts, easy payments, real-time updates, and more, KAISPE makes the portal indispensable for your customers' day-to-day operations, encouraging regular use and boosting engagement.",
  },
  {
    heading: "Complex Interface",
    iconOne: OVIconOne,
    titleOne: "Challenge",
    descriptionOne:
      "A confusing, overly complex design can turn users away, resulting in high abandonment rates and frustration.",
    iconTwo: OVIconTwo,
    titleTwo: "How KAISPE Solves This",
    descriptionTwo:
      "KAISPE offers a simple, intuitive design that fits the specific needs of your users. The portal adapts to your workflows, ensuring that navigation is straightforward, tasks are easy to complete, and the overall user experience is pleasant. We prioritize simplicity without sacrificing functionality, making it easier for your team and customers to interact with the system.",
  },
  {
    heading: "Complex Interface",
    iconOne: OVIconOne,
    titleOne: "Challenge",
    descriptionOne:
      "Connecting the customer portal to your existing systems, such as CRM, billing, and ERP software, can be a complex and time-consuming process. Poor integration can cause delays, reduce data accuracy, and lead to maintenance issues.",
    iconTwo: OVIconTwo,
    titleTwo: "How KAISPE Solves This",
    descriptionTwo:
      "Our platform is built for seamless integration. We make sure your portal works harmoniously with your existing tools and systems, eliminating the need for duplicate data entry and reducing manual errors. With KAISPE, integration is streamlined, and our team ensures a smooth transition with minimal disruption to your operations.",
  },
]; */

// factors to consider section data
/* export const factorsToConsider = [
  {
    icon: FTCIconOne,
    title: "Easy Integration",
    description:
      "Ensure the portal integrates seamlessly with your existing ERP, CRM, and procurement software to centralize data and streamline workflows.",
  },
  {
    icon: FTCIconTwo,
    title: "User-Friendly Interface",
    description:
      "Choose a portal that is intuitive and easy for both teams and customers to use. A smooth, simple interface boosts user adoption and satisfaction.",
  },
  {
    icon: FTCIconThree,
    title: "Customization",
    description:
      "Select a portal that can be tailored to your business needs, from branding to feature sets. KAISPE's flexibility allows for personalized experiences that align with your unique requirements.",
  },
  {
    icon: FTCIconFour,
    title: "Security & Compliance",
    description:
      "Protect sensitive data with robust security features. KAISPE adheres to industry standards for data protection and ensures your business is always compliant with regulations.",
  },
]; */

// revolutionizing business section data
/* export const revolutionizingBusiness = [
  {
    icon: RBIconOne,
    title: "Actionable Intelligence",
    description:
      "AI analyzes vast data sets to provide clear, actionable insights.",
  },
  {
    icon: RBIconTwo,
    title: "Real-Time Analytics",
    description: "Stay ahead with up-to-the-minute reports and forecasts.",
  },
  {
    icon: RBIconThree,
    title: "Enhanced Problem-Solving",
    description:
      "AI identifies potential challenges and suggests solutions proactively.",
  },
]; */

// ai features section data
/* export const aiFeatures = [
  {
    icon: AFIconOne,
    bgColor: "#2ECEA8",
    title: "AI Assistant",
    description:
      "Enhance productivity with an AI assistant that provides recommendations, automates routine tasks, and facilitates smarter decision-making.",
  },
  {
    icon: AFIconTwo,
    bgColor: "#FF00FF",
    title: "Predictive Analytics",
    description:
      "Leverage historical and real-time data to anticipate trends and customer needs.",
  },
  {
    icon: AFIconThree,
    bgColor: "#FEAD44",
    title: "Smart Automation",
    description:
      "Automate repetitive tasks and workflows, reducing manual intervention and errors.",
  },
  {
    icon: AFIconFour,
    bgColor: "#5580FF",
    title: "Dynamic Language Processing",
    description:
      "Break language barriers with AI-powered translation tools for global communication.",
  },
  {
    icon: AFIconFive,
    bgColor: "#2ECEA8",
    title: "Real-Time Insights",
    description:
      "Receive up-to-date analytics to drive timely, informed decisions.",
  },
  {
    icon: AFIconSix,
    bgColor: "#FF00FF",
    title: "Machine Learning Models",
    description:
      "Continuously adapt and improve operations with self-learning algorithms.",
  },
]; */

// ai key capabilities section data
/* export const aiKeyCapabilities = [
  {
    icon: AKCIconOne,
    title: "AI Assistant Functionality",
    description:
      "Provide real-time support, streamline communications, and execute tasks autonomously to improve operational efficiency.",
  },
  {
    icon: AKCIconTwo,
    title: "Seamless System Integration",
    description:
      "Effortlessly connect AI with existing ERP, CRM, and inventory systems.",
  },
  {
    icon: AKCIconThree,
    title: "Adaptive Workflows",
    description: "Use AI to modify processes dynamically based on data trends.",
  },
  {
    icon: AKCIconFour,
    title: "Enhanced Security",
    description:
      "Safeguard your operations with AI-driven fraud detection and risk management.",
  },
  {
    icon: AKCIconFive,
    title: "Scalability",
    description:
      "Scale AI features to grow with your business, ensuring long-term adaptability.",
  },
]; */

// ai major benefits section data
/* export const aiMajorBenefits = [
  {
    icon: AMBIconOne,
    title: "AI Assistant Advantages",
    description:
      "Simplify daily tasks, enhance decision-making processes, and provide 24/7 support for your team.",
  },
  {
    icon: AMBIconTwo,
    title: "Efficiency",
    description:
      "Streamline operations and eliminate bottlenecks with intelligent automation.",
  },
  {
    icon: AMBIconThree,
    title: "Cost Savings",
    description:
      "Reduce operational costs by optimizing workflows and minimizing errors.",
  },
  {
    icon: AMBIconFour,
    title: "Enhanced Decision-Making",
    description:
      "Utilize real-time insights to make proactive and strategic business choices.",
  },
  {
    icon: AMBIconFive,
    title: "Customer Satisfaction",
    description:
      "Improve service delivery with personalized, AI-driven interactions.",
  },
  {
    icon: AMBIconSix,
    title: "Competitive Edge",
    description:
      "Stay ahead in the market by leveraging cutting-edge AI technology.",
  },
]; */

// ai use cases section data
/* export const aiUseCases = [
  {
    icon: AUCIconOne,
    title: "AI Assistant Applications",
    description:
      "From customer service chatbots to internal workflow management, the AI assistant offers versatile solutions to streamline operations and enhance engagement",
  },
  {
    icon: AUCIconTwo,
    title: "Retail",
    description:
      "Predict demand trends, optimize inventory levels, and personalize customer shopping experiences.",
  },
  {
    icon: AUCIconThree,
    title: "Manufacturing",
    description:
      "Implement predictive maintenance to reduce downtime and enhance productivity.",
  },
  {
    icon: AUCIconFour,
    title: "Finance",
    description:
      "Detect fraud in real-time, ensuring secure and seamless transactions.",
  },
  {
    icon: AUCIconFive,
    title: "Healthcare",
    description:
      "Analyze patient data for better management and decision-making.",
  },
  {
    icon: AUCIconSix,
    title: "Logistics",
    description:
      "Optimize route planning and resource allocation for faster deliveries.",
  },
]; */

//* Inside Resources Pages Data */

// seamless workflow section data
/* export const seamlessWorkflow = [
  {
    icon: SWIconOne,
    title: "Accurate Delivery Confirmation",
    description:
      "Every delivery is tracked and verified with detailed information, including e-signatures and photos, ensuring transparency and eliminating disputes.",
  },
  {
    icon: SWIconTwo,
    title: "Real-Time Tracking",
    description:
      "Monitor deliveries in real time, reducing delays and improving customer satisfaction. Access proof of delivery instantly via the portal for enhanced visibility.",
  },
  {
    icon: SWIconThree,
    title: "Improved Customer Experience",
    description:
      "Customers can track their deliveries and view proof of delivery directly in the portal, boosting trust and satisfaction.",
  },
]; */

// seamless integration section data
/* export const seamlessIntegration = [
  {
    icon: SIIconOne,
    title: "Accurate Data Flow",
    description:
      "Eliminate discrepancies by ensuring consistent data transfer between systems. This improves communication across departments and reduces errors caused by manual data entry.",
  },
  {
    icon: SIIconTwo,
    title: "Improved Efficiency",
    description:
      "Centralized data empowers your teams to make better decisions faster and enhances operational workflows. Access real-time insights and data across all business functions.",
  },
  {
    icon: SIIconThree,
    title: "Faster Decision-Making",
    description:
      "By consolidating all your data in one place, KAISPE helps you make data-driven decisions that boost performance and support long-term growth.",
  },
]; */

// microsoft dynamics 365 section data
/* export const microsoftDynamics365 = [
  {
    icon: MDIconOne,
    title: "Real-Time Syncing",
    description:
      "Synchronize data in real-time across finance, procurement, and inventory, ensuring up-to-date information for better decisions and efficiency.",
  },
  {
    icon: MDIconTwo,
    title: "Unified Operations",
    description:
      "Gain an integrated view of operations, streamlining workflows and enhancing team coordination across procurement, finance, and inventory.",
  },
  {
    icon: MDIconThree,
    title: "Streamlined Processes",
    description:
      "Automate tasks like data entry and order processing, freeing time for strategic business growth.",
  },
]; */

// frequently asked questions section data
export const frequentlyAskedQuestions = [
  {
    question: "Is there a limit to how many users I can add to my account?",
    answer:
      "You can add as many users as needed to your account. However, a minimum of 5 users is required to subscribe to any of our plans, whether it's Basic or Advanced. Please refer to your subscription plan details for further information on licensing and user limits.",
  },
  {
    question: "Can I integrate the portal with other systems?",
    answer: (
      <>
        Yes, our portal supports integration with various third-party tools and
        systems such as Microsoft Dynamics 365, Azure AD, and others. You can
        contact us at <span className="-text-light-blue">info@kaispe.com</span>{" "}
        for more details.
      </>
    ),
  },
  {
    question: "How do I report an issue with my subscription or order?",
    answer: (
      <>
        If you&apos;re facing any issues with your subscription or order, you
        can sign-in and then submit a support ticket through the &quot;Support
        portal&quot; section. Our team will get back to you as soon as possible
        to resolve the issue or you can simply reach out to us at{" "}
        <span className="-text-light-blue">info@kaispe.com</span>
      </>
    ),
  },
  {
    question: "How do I renew my subscription?",
    answer: `You can renew your subscription by going to the "Subscription Management" section in the portal. There, you'll find options to renew, upgrade, or downgrade your current plan.`,
  },
  {
    question: "Can I assign different roles to my users?",
    answer: `Yes, as an admin, you can assign different roles and permissions to each user in your account. Go to the "User Management" section, where you can set roles such as Viewer, Editor, or Admin based on the needs of your team.`,
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: `Yes, you can cancel your subscription at any time from the "Subscription Management" section. Upon cancellation, your services will continue until the end of the current billing cycle, after which the subscription will not be renewed.`,
  },
  {
    question: "Is my data secure on the portal?",
    answer:
      "Absolutely. We prioritize the security of your data by using industry-standard encryption and following best practices for data protection. Your information is safe, and only authorized personnel can access it.",
  },
  {
    question: "What happens if I don't renew my subscription?",
    answer:
      "If your subscription is not renewed by the end of the billing cycle, your account will be downgraded to a free plan with limited access. You will still have a 30-day grace period to renew your subscription without losing any data.",
  },
  {
    question: "Can I assign multiple admins to manage the portal?",
    answer: `Yes, you can assign multiple admins to manage the portal. Simply go to the "User Management" section, select the users you wish to promote, and assign them the admin role.`,
  },
  {
    question: "How do I reset a user's access if they are locked out?",
    answer: `If a user is locked out, admins can reset their access through the "User Management" section. Simply find the user, click on "Reset Password," and a reset link will be sent to their email address.`,
  },
  {
    question: "Can I export data from the portal?",
    answer: `Yes, you can export various reports and data from the "Reports" section in the portal. These exports are available in multiple formats, including Excel and PDF, making it easy to analyze or share information.`,
  },
  {
    question: "Will I receive reminders for subscription renewal?",
    answer: `Yes, we send automated reminders before your subscription is due for renewal. You'll receive these notifications via email, and they'll also appear in the portal under the "Notifications" section.`,
  },
  {
    question: "What happens to my data if I downgrade my subscription?",
    answer:
      "If you downgrade your subscription, you'll still retain access to your data, but some advanced features may be restricted based on the new plan. Your data will remain intact, and you can upgrade again at any time to regain full access.",
  },
  {
    question: "What kind of support is available if I need help?",
    answer:
      "We offer multiple support channels, including live chat, email, and phone support.",
  },
  {
    question: "How do I schedule a demo or training session?",
    answer:
      "If you're looking for a demo or training session, you can simply navigate to the home page and select the Book a demo button. Our team will schedule a session with you based on your availability to ensure you get the most out of the portal.",
  },
  {
    question:
      "What should I do if I notice unauthorized activity on my account?",
    answer: (
      <>
        If you notice any suspicious or unauthorized activity, immediately
        contact <span className="-text-light-blue">info@kaispe.com</span>. You
        can also change your password and review your account activity logs for
        additional security.
      </>
    ),
  },
];

//* Pricing Page Data */

// pricing plans section data
export const PRICING_OPTIONS = {
  Monthly: {
    free: 0,
    basic: 10,
    advanced: 14,
  },
  "1 Year": {
    free: 0,
    basic: 9,
    advanced: 13,
  },
  "2 Years": {
    free: 0,
    basic: 8,
    advanced: 12,
  },
  "3 Years": {
    free: 0,
    basic: 6,
    advanced: 10,
  },
};

//* Contact Page Data */

// get in touch section data
export const officeLocations = [
  {
    title: "USA Office",
    address: "415 W. Golf Rd Suite 55-K Arlington Heights , IL 60005.",
    phone: "USA +1 315 791 4472",
  },
  {
    title: "UAE Office",
    address:
      "Meydan Grandstand 6th Floor, Meydan Road, Nada Al Sheba Dubai, UAE.",
    phone: "UAE +971 557 51 5069",
  },
  {
    title: "Pakistan Office",
    address: "Suite# 213 Sumya Business Avenue MACHS, Karachi, Pakistan.",
    phone: "PAK +92 213 432 6085",
  },
  {
    title: "Email",
    address: "info@kaispe.com",
  },
];

// find us on maps section data
/* export const officesLocation = [
  {
    title: "USA Office",
    address: "415 W. Golf Rd Suite 55-K Arlington Heights , IL 60005.",
    image: USAMap,
  },
  {
    title: "Pakistan Office",
    address: "Suite# 213 Sumya Business Avenue MACHS , Karachi, Pakistan.",
    image: PakistanMap,
  },
]; */

//* Privacy Policy Data */

export const privacyPolicy = [
  {
    title: "Information We Collect",
    desOne:
      "We collect only what's needed to deliver and improve your experience:",
    points: [
      "Your name, email, company name, and plan type",
      "Usage data to understand how you interact with the app",
      "Support-related communication",
    ],
    desTwo: (
      <>
        We <strong>do not</strong> collect payment information directly.
        That&apos;s handled securely by our trusted payment partners.
      </>
    ),
  },
  {
    title: "How We Use Your Information",
    desOne: "We use your data to:",
    points: [
      "Provide access to the app",
      "Improve features and performance",
      "Offer support when needed",
      "Send important notifications (like billing or system updates)",
    ],
  },
  {
    title: "Your Data Belongs to You",
    desOne: "You own everything you upload or create. We don't:",
    points: [
      "Sell your data",
      "Share it with advertisers",
      "Use it beyond what's stated here",
    ],
    desTwo:
      "We access your data only for support or improvements—never without reason.",
  },

  {
    title: "Security",
    desOne:
      "We use industry-standard security measures to protect your data, including:",
    points: [
      "Encrypted connections",
      "Secure server environments",
      "Strict internal access controls",
    ],
    desTwo:
      "Still, no system is 100% secure, so we recommend strong passwords on your end too.",
  },
  {
    title: "Data Retention",
    desOne:
      "If you cancel your subscription, we retain your data for 30 days to let you export it. After that, it may be permanently deleted from our servers.",
  },
  {
    title: "Sharing Information",
    desOne: "We don't share your information except:",
    points: [
      "With trusted service providers who help us run the platform (like hosting or email services)",
      "When legally required (and we'll notify you where we can)",
    ],
  },
  {
    title: "Cookies & Analytics",
    desOne:
      "We use minimal cookies to keep you logged in and gather insights to improve performance. You can control cookies through your browser settings.",
  },
  {
    title: "Your Choices",
    desOne: "You can:",
    points: [
      "View or update your account information anytime",
      "Cancel your plan",
      "Request data export or deletion",
    ],
    desTwo: (
      <>
        To request changes, email us at{" "}
        <span className="text-[#473BF0]">info@kaispe.com</span>
      </>
    ),
  },
  {
    title: "Changes to This Policy",
    desOne:
      "If we update this policy, we'll notify you through the app or via email. The latest version will always be available in the app footer.",
  },
  {
    title: "Contact Us",
    desOne: "Got questions or privacy concerns? Reach out anytime:",
    desTwo: <span className="text-[#473BF0] text-lg">info@kaispe.com</span>,
  },
];

//* Terms And Conditions Data */

export const termsAndConditions = [
  {
    title: "Access to the Application",
    desOne:
      "You are granted a non-exclusive, non-transferable, limited license to use the application via the internet, according to the features included in your selected plan (Free, Basic, or Advance). No software download or hardware installation is required.",
  },
  {
    title: "Data Ownership and Privacy",
    desOne: "All content you create or upload remains your property.",
    points: [
      "We do not sell or share your data.",
      "We only access your data to provide support or improve services.",
      "If required by law, we will comply with legal obligations responsibly. Please refer to our Privacy Policy for more details.",
    ],
  },
  {
    title: "Subscription and Billing",
    desOne: "For paid plans:",
    points: [
      "Billing is done monthly or annually, as per your selection.",
      "You will be notified prior to renewal.",
      "If payment fails or your subscription expires, access to certain features may be restricted until updated.",
    ],
  },
  {
    title: "Plan Limits",
    desOne:
      "Your access and usage are subject to the limits specified in your selected plan.",
    points: [
      "Upgrades or additional features may require a separate subscription or add-on.",
    ],
  },
  {
    title: "Support and Updates",
    desOne:
      "We regularly update the platform to improve functionality and performance.",
    points: [
      "All plans receive updates automatically.",
      "Paid plans are eligible for priority customer support.",
    ],
  },
  {
    title: "Cancellation and Data Retention",
    desOne: "You may cancel your subscription at any time.",
    points: [
      "After cancellation, your data will remain accessible for a limited period (typically 30 days) for export.",
      "After this period, your data may be permanently removed from our systems.",
    ],
  },
  {
    title: "Custom Integrations",
    desOne:
      "Any integration with external systems (e.g., ERP, CRM, or other tools) is considered a separate service and may involve additional scope, timelines, and costs.",
  },
  {
    title: "Service Availability",
    desOne:
      "We aim to maintain high uptime. However, occasional maintenance or service interruptions may occur.",
    desTwo: "We will make reasonable efforts to notify you in advance.",
  },
  {
    title: "Fair Usage",
    desOne: (
      <>
        You agree to use the application in a lawful and responsible manner.
        <br /> We reserve the right to suspend or terminate access if any
        misuse, abuse, or violation of these Tersms occurs.
      </>
    ),
  },
  {
    title: "Changes to Terms",
    desOne: (
      <>
        We may revise these Terms from time to time.
        <br /> Continued use of the application after updates means you accept
        the modified Terms.
      </>
    ),
  },
  {
    title: "Contact Us",
    desOne: "Got questions or privacy concerns? Reach out anytime:",
    desTwo: <span className="text-[#473BF0] text-lg">info@kaispe.com</span>,
  },
];
