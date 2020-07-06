import Friend from '../Models/friends';
import Notification from '../Models/Notification';
import Profile from '../Models/profile';
import User from '../Models/user';

export const USER = [
    new User(
        '03201234567', 
        'user'
    )
]

export const FRIENDS = [
    new Friend(
        '1',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
        'Fareed Murtaza', 
        'A+', 
        '032084825644'
    ), 
    new Friend(
        '2',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
        'Irtaza Nadeem', 
        'A+',
        '03216573539'
    ), 
    new Friend(
        '3',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
        'Shaheer Ramzan', 
        'AB+',
        '03211954672'
    ), 
    new Friend(
        '4',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
        'M Faizan', 
        'A+',
        '03201234567'
    ), 
    new Friend(
        '5',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
        'Azan Arif', 
        'B+',
        '03201234567'
    ), 
    new Friend(
        '6',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
        'Fareed Murtazaa', 
        'A+',
        '03201234567'
    ), 
    new Friend(
        '7',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
        'Irtaza Nadeemm', 
        'A+',
        '03201234567'
    ), 
    new Friend(
        '8',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
        'Shaheer Ramzan', 
        'AB+',
        '03201234567'
    ), 
    new Friend(
        '9',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
        'M Faizan', 
        'A+',
        '03201234567'
    ), 
    new Friend(
        '10',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
        'Azan Arif', 
        'B+',
        '03201234567'
    ), 
]

//id, userName, requestType, locationFrom, locationTo, distance, time
export const NOTIFICATION = [
    new Notification('1', 'User1', '1', 'none', 'Jinnah hospital', '1', '12.10pm', 'none',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg'),
    new Notification('2', 'User2', '2', 'UCP', 'Doctor Hospital', '5.6', '11.15pm', 'none',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg'),
    new Notification('3', 'Society123', '3', 'none', 'none', 'none', '11.10pm', 'Organizing a seminar on XYZ to encorage blood donation.',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg'),
    new Notification('4', 'User12', '1', 'none', 'Jinnah Hospital', '1', '12.10pm', 'none',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg'),
    new Notification('5', 'User22', '2', 'UCP', 'Doctor Hospital', '5.6', '11.15pm', 'none',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg'),
    new Notification('6', 'Society1232', '3', 'none', 'none', 'none', '11.10pm', 'Organizing a seminar on XYZ to encorage blood donation.',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg'),
    new Notification('7', 'User14', '1', 'none', 'Jinnah Hospital', '1', '12.10pm', 'none',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg'),
    new Notification('8', 'User24', '2', 'UCP', 'Doctor Hospital', '5.6', '11.15pm', 'none',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg'),
    new Notification('9', 'Society1234', '3', 'none', 'none', 'none', '11.10pm', 'Organizing a seminar on XYZ to encorage blood donation.',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg'),
]

// id, profilePic, name, email, password, bloodGroup, phoneNo
export const PROFILE=[
    new Profile('1',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    'Fareed Murtaza', 
    'fareedmurtaza91@gmail.com', 
    'password', 
    'A+', 
    '0900-78601'
    ), 
    new Profile('2',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    'Irtaza Nadeem', 
    'fareedmurtaza91@gmail.com', 
    'password', 
    'A+', 
    '0900-78601'
    )
]