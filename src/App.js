import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Preloader
const Preloader = React.lazy(() => import("./components/layouts/Preloader"));
// Pages
const Home = React.lazy(() => import("./components/pages/Home"));
const Animation = React.lazy(() => import("./components/pages/Animation"));
const Widgets = React.lazy(() => import("./components/pages/Widgets"));
// appointment
const Addappointment = React.lazy(() => import("./components/pages/appointment/Addappointment"));
const Appointmentlist = React.lazy(() => import("./components/pages/appointment/Appointmentlist"));
// apps
const Chat = React.lazy(() => import("./components/pages/apps/Chat"));
const Email = React.lazy(() => import("./components/pages/apps/Email"));
const Todolist = React.lazy(() => import("./components/pages/apps/Todolist"));
// bed manager
const Addbed = React.lazy(() => import("./components/pages/bed-manager/Addbed"));
const Bedlist = React.lazy(() => import("./components/pages/bed-manager/Bedlist"));
// charts
const Chartjs = React.lazy(() => import("./components/pages/charts/Chartjs"));
const Googlecharts = React.lazy(() => import("./components/pages/charts/Googlecharts"));
// dashboard
const Clientmanagement = React.lazy(() => import("./components/pages/dashboard/Clientmanagement"));
const Projectmanagement = React.lazy(() => import("./components/pages/dashboard/Projectmanagement"));
const Socialmedia = React.lazy(() => import("./components/pages/dashboard/Socialmedia"));
const Webanalytics = React.lazy(() => import("./components/pages/dashboard/Webanalytics"));
// department
const Adddepartment = React.lazy(() => import("./components/pages/department/Adddepartment"));
const Departmentlist = React.lazy(() => import("./components/pages/department/Departmentlist"));
// doctor
const Adddoctor = React.lazy(() => import("./components/pages/doctor/Adddoctor"));
const Doctorlist = React.lazy(() => import("./components/pages/doctor/Doctorlist"));
// doctor schedule
const Addschedule = React.lazy(() => import("./components/pages/doctor-schedule/Addschedule"));
const Schedulelist = React.lazy(() => import("./components/pages/doctor-schedule/Schedulelist"));
// form
const Formlayouts = React.lazy(() => import("./components/pages/form/Formlayouts"));
const Formvalidation = React.lazy(() => import("./components/pages/form/Formvalidation"));
const Formwizard = React.lazy(() => import("./components/pages/form/Formwizard"));
const Fromelements = React.lazy(() => import("./components/pages/form/Fromelements"));
// human resource
const Addemployee = React.lazy(() => import("./components/pages/human-resource/Addemployee"));
const Addnurse = React.lazy(() => import("./components/pages/human-resource/Addnurse"));
const Addpharmacist = React.lazy(() => import("./components/pages/human-resource/Addpharmacist"));
const Addrepresentative = React.lazy(() => import("./components/pages/human-resource/Addrepresentative"));
const Employeelist = React.lazy(() => import("./components/pages/human-resource/Employeelist"));
const Nurselist = React.lazy(() => import("./components/pages/human-resource/Nurselist"));
const Pharmacistlist = React.lazy(() => import("./components/pages/human-resource/Pharmacistlist"));
const Representativelist = React.lazy(() => import("./components/pages/human-resource/Representativelist"));
// icons
const Flaticons = React.lazy(() => import("./components/pages/icons/Flaticons"));
const Fontawesome = React.lazy(() => import("./components/pages/icons/Fontawesome"));
const Materialize = React.lazy(() => import("./components/pages/icons/Materialize"));
// maps
const Googlemaps = React.lazy(() => import("./components/pages/maps/Googlemaps"));
const Vectormaps = React.lazy(() => import("./components/pages/maps/Vectormaps"));
// notice
const Addnotice = React.lazy(() => import("./components/pages/notice/Addnotice"));
const Noticelist = React.lazy(() => import("./components/pages/notice/Noticelist"));
// patient
const Addpatient = React.lazy(() => import("./components/pages/patient/Addpatient"));
const Patientlist = React.lazy(() => import("./components/pages/patient/Patientlist"));
// payment
const Addpayment = React.lazy(() => import("./components/pages/payment/Addpayment"));
const Paymentinvoice = React.lazy(() => import("./components/pages/payment/Paymentinvoice"));
const Paymentlist = React.lazy(() => import("./components/pages/payment/Paymentlist"));
// popups
const Sweetalerts = React.lazy(() => import("./components/pages/popups/Sweetalerts"));
const Toast = React.lazy(() => import("./components/pages/popups/Toast"));
// prebuilt pages
const Comingsoon = React.lazy(() => import("./components/pages/prebuilt-pages/Comingsoon"));
const Defaultlogin = React.lazy(() => import("./components/pages/prebuilt-pages/Defaultlogin"));
const Defaultregister = React.lazy(() => import("./components/pages/prebuilt-pages/Defaultregister"));
const Error = React.lazy(() => import("./components/pages/prebuilt-pages/Error"));
const Faq = React.lazy(() => import("./components/pages/prebuilt-pages/Faq"));
const Invoice = React.lazy(() => import("./components/pages/prebuilt-pages/Invoice"));
const Lockscreen = React.lazy(() => import("./components/pages/prebuilt-pages/Lockscreen"));
const Modallogin = React.lazy(() => import("./components/pages/prebuilt-pages/Modallogin"));
const Modalregister = React.lazy(() => import("./components/pages/prebuilt-pages/Modalregister"));
const Portfolio = React.lazy(() => import("./components/pages/prebuilt-pages/Portfolio"));
const Userprofile = React.lazy(() => import("./components/pages/prebuilt-pages/Userprofile"));
// reports
const Doctorreport = React.lazy(() => import("./components/pages/reports/Doctorreport"));
const Patientreport = React.lazy(() => import("./components/pages/reports/Patientreport"));
const Totalreport = React.lazy(() => import("./components/pages/reports/Totalreport"));
// tables
const Basictables = React.lazy(() => import("./components/pages/tables/Basictables"));
const Datatables = React.lazy(() => import("./components/pages/tables/Datatables"));
// uiadvance
const Cropper = React.lazy(() => import("./components/pages/uiadvance/Cropper"));
const Draggable = React.lazy(() => import("./components/pages/uiadvance/Draggable"));
const Modals = React.lazy(() => import("./components/pages/uiadvance/Modals"));
const Rangeslider = React.lazy(() => import("./components/pages/uiadvance/Rangeslider"));
const Sliders = React.lazy(() => import("./components/pages/uiadvance/Sliders"));
const Tour = React.lazy(() => import("./components/pages/uiadvance/Tour"));
const Ratings = React.lazy(() => import("./components/pages/uiadvance/Ratings"));
// uibasic
const Accordions = React.lazy(() => import("./components/pages/uibasic/Accordions"));
const Alerts = React.lazy(() => import("./components/pages/uibasic/Alerts"));
const Badges = React.lazy(() => import("./components/pages/uibasic/Badges"));
const Breadcrumbs = React.lazy(() => import("./components/pages/uibasic/Breadcrumbs"));
const Buttons = React.lazy(() => import("./components/pages/uibasic/Buttons"));
const Cards = React.lazy(() => import("./components/pages/uibasic/Cards"));
const Pagination = React.lazy(() => import("./components/pages/uibasic/Pagination"));
const Preloaders = React.lazy(() => import("./components/pages/uibasic/Preloader"));
const Progressbars = React.lazy(() => import("./components/pages/uibasic/Progressbars"));
const Tabs = React.lazy(() => import("./components/pages/uibasic/Tabs"));
const Typography = React.lazy(() => import("./components/pages/uibasic/Typography"));

function App() {
  return (
    <Router basename={'/templatemonster/react/medboard'}>
      <Suspense fallback={<div></div>}>
        <Preloader />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/animation" component={Animation} />
          <Route path="/widgets" component={Widgets} />
          {/* appointment */}
          <Route path="/appointment/add-appointment" component={Addappointment} />
          <Route path="/appointment/appointment-list" component={Appointmentlist} />
          {/* apps */}
          <Route path="/apps/chat" component={Chat} />
          <Route path="/apps/email" component={Email} />
          <Route path="/apps/to-do-list" component={Todolist} />
          {/* bed manager */}
          <Route path="/bed-manager/add-bed" component={Addbed} />
          <Route path="/bed-manager/bed-list" component={Bedlist} />
          {/* charts */}
          <Route path="/charts/chartjs" component={Chartjs} />
          <Route path="/charts/google-charts" component={Googlecharts} />
          {/* dashboard */}
          <Route path="/dashboard/client-management" component={Clientmanagement} />
          <Route path="/dashboard/project-management" component={Projectmanagement} />
          <Route path="/dashboard/social-media" component={Socialmedia} />
          <Route path="/dashboard/web-analytics" component={Webanalytics} />
          {/* department */}
          <Route path="/department/add-department" component={Adddepartment} />
          <Route path="/department/department-list" component={Departmentlist} />
          {/* doctor */}
          <Route path="/doctor/add-doctor" component={Adddoctor} />
          <Route path="/doctor/doctor-list" component={Doctorlist} />
          {/* doctor schedule */}
          <Route path="/doctor-schedule/add-schedule" component={Addschedule} />
          <Route path="/doctor-schedule/schedule-list" component={Schedulelist} />
          {/* form */}
          <Route path="/form/form-layout" component={Formlayouts} />
          <Route path="/form/form-validation" component={Formvalidation} />
          <Route path="/form/form-wizard" component={Formwizard} />
          <Route path="/form/form-elements" component={Fromelements} />
          {/* human resource */}
          <Route path="/human-resource/add-employee" component={Addemployee} />
          <Route path="/human-resource/add-nurse" component={Addnurse} />
          <Route path="/human-resource/add-pharmacist" component={Addpharmacist} />
          <Route path="/human-resource/add-representative" component={Addrepresentative} />
          <Route path="/human-resource/employee-list" component={Employeelist} />
          <Route path="/human-resource/nurse-list" component={Nurselist} />
          <Route path="/human-resource/pharmacist-list" component={Pharmacistlist} />
          <Route path="/human-resource/representative-list" component={Representativelist} />
          {/* icons */}
          <Route path="/icons/flaticons" component={Flaticons} />
          <Route path="/icons/fontawesome" component={Fontawesome} />
          <Route path="/icons/materialize" component={Materialize} />
          {/* maps */}
          <Route path="/maps/google-maps" component={Googlemaps} />
          <Route path="/maps/vector-maps" component={Vectormaps} />
          {/* notice */}
          <Route path="/notice/add-notice" component={Addnotice} />
          <Route path="/notice/notice-list" component={Noticelist} />
          {/* patient */}
          <Route path="/patient/add-patient" component={Addpatient} />
          <Route path="/patient/patient-list" component={Patientlist} />
          {/* payment */}
          <Route path="/payment/add-payment" component={Addpayment} />
          <Route path="/payment/payment-invoice" component={Paymentinvoice} />
          <Route path="/payment/payment-list" component={Paymentlist} />
          {/* popups */}
          <Route path="/popups/sweet-alerts" component={Sweetalerts} />
          <Route path="/popups/toast" component={Toast} />
          {/* prebuilt pages */}
          <Route path="/prebuilt-pages/coming-soon" component={Comingsoon} />
          <Route path="/prebuilt-pages/default-login" component={Defaultlogin} />
          <Route path="/prebuilt-pages/default-register" component={Defaultregister} />
          <Route path="/prebuilt-pages/error" component={Error} />
          <Route path="/prebuilt-pages/faq" component={Faq} />
          <Route path="/prebuilt-pages/invoice" component={Invoice} />
          <Route path="/prebuilt-pages/lock-screen" component={Lockscreen} />
          <Route path="/prebuilt-pages/modal-login" component={Modallogin} />
          <Route path="/prebuilt-pages/modal-register" component={Modalregister} />
          <Route path="/prebuilt-pages/portfolio" component={Portfolio} />
          <Route path="/prebuilt-pages/user-profile" component={Userprofile} />
          {/* reports */}
          <Route path="/report/doctor-report" component={Doctorreport} />
          <Route path="/report/patient-report" component={Patientreport} />
          <Route path="/report/total-report" component={Totalreport} />
          {/* tables */}
          <Route path="/tables/basic-tables" component={Basictables} />
          <Route path="/tables/data-tables" component={Datatables} />
          {/* uiadvance */}
          <Route path="/ui-advanced/cropper" component={Cropper} />
          <Route path="/ui-advanced/draggables" component={Draggable} />
          <Route path="/ui-advanced/modals" component={Modals} />
          <Route path="/ui-advanced/range-slider" component={Rangeslider} />
          <Route path="/ui-advanced/sliders" component={Sliders} />
          <Route path="/ui-advanced/tour" component={Tour} />
          <Route path="/ui-advanced/rating" component={Ratings} />
          {/* uibasic */}
          <Route path="/ui-basic/accordions" component={Accordions} />
          <Route path="/ui-basic/alerts" component={Alerts} />
          <Route path="/ui-basic/badges" component={Badges} />
          <Route path="/ui-basic/breadcrumbs" component={Breadcrumbs} />
          <Route path="/ui-basic/buttons" component={Buttons} />
          <Route path="/ui-basic/cards" component={Cards} />
          <Route path="/ui-basic/pagination" component={Pagination} />
          <Route path="/ui-basic/preloader" component={Preloaders} />
          <Route path="/ui-basic/progress-bars" component={Progressbars} />
          <Route path="/ui-basic/tabs" component={Tabs} />
          <Route path="/ui-basic/typography" component={Typography} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
