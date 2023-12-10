// export default {
//   handleFile(ev) {
//     const imgData = {}
//     imgData.name = ev.target.files[0].name
//     const reader = new FileReader()
//     reader.readAsDataURL(ev.target.files[0])
//     reader.onload = (f) => { 
//       imgData.file = f.target.result
//       this.$emit('handleFile', imgData)
//     }
//   },


//   // HOW TO UPLOAD IMG
//   // console.log(ev.target.files[0].name)  // getting file object / file name
  
//   // const formData = new FormData() // can create fromData obj for useability
//   // const reader = new FileReader() // creating fileReader for retrieving the data of file
  
//   // reader.readAsDataURL(ev.target.files[0]) // reading file

//   // reader.onload = (f) => console.log(f.target.result) // reader result is a file content

//   placeholderTxt () {
//     const ph = this.inputData.inpPlaceholder
//     return ph.charAt(0).toUpperCase() + ph.slice(1)
//   },
  




//   handleSubmit: async (values, dispatch) => {
//     const token = await usersApi.getToken();
//     values.token = token;
//     const userAddResponse = await usersApi.addUser(values)
//     const {getUsers, resetUsersData} = this.props;

//     let nextUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6';
//     if (window.innerWidth < 768) {
//         nextUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=3';
//     }

//     switch (userAddResponse) {
//         case 'New user successfully registered':
//             this.setState({
//                 ...INITIAL_STATE,
//             });
//             dispatch(reset('register'));
//             dispatch(resetUsersData());
//             getUsers(nextUrl);
//             break;
//         case 'Network Error':
//             this.setState({
//                 modalMessage: 'Network Error',
//             });
//             break;
//         case 'Request failed with status code 401':
//             this.setState({
//                 modalMessage: 'The token expired',
//             });
//             break;
//         case 'Request failed with status code 409':
//             this.setState({
//                 modalMessage: 'User with this phone or email already exist',
//             });
//             break;
//         case 'Request failed with status code 422':
//             this.setState({
//                 modalMessage: 'Validation failed',
//             });
//             break;
//         default:
//             break;
//     }

//   },


//   formatPhoneNumber: (phoneNumber) => {
//     // convert the raw number to (xxx) xxx-xxx format
//     const x = phoneNumber && phoneNumber.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/)
//     console.log(!x[2] ? x[1] : `(${x[1]}) ${x[2]}${x[3] ? `-${x[3]}` : ''}`)
//     return !x[2] ? x[1] : `(${x[1]}) ${x[2]}${x[3] ? `-${x[3]}` : ''}`
//   }
  
// }




// import re

// regex = r'^(?:\+38)?(?:\(044\)[ .-]?[0-9]{3}[ .-]?[0-9]{2}[ .-]?[0-9]{2}|044[ .-]?[0-9]{3}[ .-]?[0-9]{2}[ .-]?[0-9]{2}|044[0-9]{7})$'
// string = '''

// +380445371428
// +38(044)5371428
// +38(044)537 14 28
// +38(044)537-14-28
// +38(044) 537.14.28
// 044.537.14.28
// 0445371428
// 044-537-1428
// (044)537-1428
// 044 537-1428
// +83(044)537 14 28
// 088 537-1428

// '''
// print(re.findall(regex, string, re.M))




let formatPhoneNumber = (phoneNumber) => {
  // convert the raw number to (xxx) xxx-xxx format
  const x = phoneNumber && phoneNumber.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/)
  console.log(!x[2] ? x[1] : `(${x[1]}) ${x[2]}${x[3] ? `-${x[3]}` : ''}`)
  return !x[2] ? x[1] : `(${x[1]}) ${x[2]}${x[3] ? `-${x[3]}` : ''}`
}
let format = (phoneNumber) => {
  // convert the raw number to (xxx) xxx-xxx format
  const x = phoneNumber && phoneNumber.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/)
  console.log(!x[2] ? x[1] : `(${x[1]}) ${x[2]}${x[3] ? `-${x[3]}` : ''}`)
  return !x[2] ? x[1] : `(${x[1]}) ${x[2]}${x[3] ? `-${x[3]}` : ''}`
}

format('0952856434')

let format2 = (phoneNumber) => {
  // convert the raw number to +38 (098) xxx xx xx format
  const x = phoneNumber && phoneNumber.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);

  if (!x) {
    return phoneNumber; // Return original if the match is not successful
  }
  let res = `+${x[1] ? x[1] + ' ' : ''}(${x[2] ? x[2] + ') ' : ''}${x[3]}${x[4] ? ` ${x[4]}` : ''}${x[5] ? ` ${x[5]}` : ''}`;
  console.log(res)
}

format2('+380982856434')

export const formatPhone = (phoneNumber) => {
  return phoneNumber.replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5');
};