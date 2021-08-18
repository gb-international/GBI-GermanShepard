import AssignUsers from '@/admin/routes/assignUsers.js'
import Bank from '@/admin/routes/Bank.js';
import Blog from '@/admin/routes/Blog.js';
import BookedTour from '@/admin/routes/BookedTour.js';
import Corporate from '@/admin/routes/Corporate.js';
import Escort from '@/admin/routes/Escort.js';
import Feedback from '@/admin/routes/Feedback.js';
import GalleryEncyclopedia from '@/admin/routes/GalleryEncyclopedia.js';
import Home from '@/admin/routes/Home.js';
import Hotel from '@/admin/routes/Hotel.js';
import Itinerary from '@/admin/routes/Itinerary.js';
import Jobs from '@/admin/routes/Jobs.js';
import Location from '@/admin/routes/Location.js';
import NotificationPanel from '@/admin/routes/NotificationPanel.js';
import PaymentLink from '@/admin/routes/PaymentLink.js';
import Role from '@/admin/routes/Role.js';
import School from '@/admin/routes/School.js';
import Setting from '@/admin/routes/Setting.js';
import Sightseeing from '@/admin/routes/Sightseeing.js';
import Tour from '@/admin/routes/Tour.js';
import Transport from '@/admin/routes/Transport.js';
import Website from '@/admin/routes/Website.js';
import ErrorFile from '@/admin/routes/ErrorFile.js';


export const routes = [
    ...AssignUsers,
    ...Bank,
    ...Blog,
    ...BookedTour,
    ...Corporate,
    ...Escort,
    ...Feedback,
    ...GalleryEncyclopedia,
    ...Home,
    ...Hotel,
    ...Itinerary,
    ...Jobs,
    ...Location,
    ...NotificationPanel,
    ...PaymentLink,
    ...Role,
    ...School,
    ...Setting,
    ...Sightseeing,
    ...Tour,
    ...Transport,
    ...Website,
    ...ErrorFile,
]