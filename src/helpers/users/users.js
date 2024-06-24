import avatar from './avatar.png';

const users = [
    {
        firstName: 'Sofia',
        lastName: 'Havertz',
        displayName: '',
        email: '',
        address: [

            {
                type: 'billing',
                name: 'Sofia Havertz',
                tel: '(+1) 234 567 890',
                address: '345 Long Island, NewYork, United States'
            },

            {
                type: 'shipping',
                name: 'Sofia Havertz',
                tel: '(+1) 234 567 890',
                address: '345 Long Island, NewYork, United States'
            },

        ],
        avatar: avatar,
        password: '123456',
        wishlist: {
            item: 'item'
        },
        id: 1
    }
]

export {users}