// var courses = [{
//         id: 1,
//         name: 'javascript',
//         coin: 100,
//         isFinish: true,
//     },
//     {
//         id: 2,
//         name: 'html,css',
//         coin: 200,
//         isFinish: true,
//     },
//     {
//         id: 3,
//         name: 'ruby',
//         coin: 300,
//         isFinish: true,
//     },
//     {
//         id: 4,
//         name: 'PHP',
//         coin: 400,
//         isFinish: true,
//     },
//     {
//         id: 5,
//         name: 'ReactJS',
//         coin: 500,
//         isFinish: true,
//     }
// ]


// var topics = [{
//             topic: 'front-end',
//             courses: [{
//                     id: 1,
//                     title: 'html,css'
//                 },
//                 {
//                     id: 2,
//                     title: 'javascript'
//                 }
//             ]
//         },
//         {
//             topic: 'back-end',
//             courses: [{
//                     id: 1,
//                     title: 'php'
//                 },
//                 {
//                     id: 2,
//                     title: 'nodeJS'
//                 }
//             ]
//         }
//     ]
//     // var x = 5
// var y = 4
// console.log(y)
// console.log(isFinite(x))
// console.log(Number.MAX_VALUE)
// console.log(typeof(x == y))
// console.log(typeof x.toString())
// var age = [1, 2, 3, 11]


// var info = [
//     { field: 'name', value: 'don' },
//     { field: 'age', value: 18 },
//     { field: 'address', value: 'ha noi' },
//     { field: 'email', value: 'ha noi' }
// ]

// var join = {}
// info.forEach(function(value, index) {
//     join[value.field] = value.value
// })

// console.log(join)

// var input = [1, 2, 3]
// var i = input.every(function(value) {

//     return value > 0
// })
// console.log(i)
// var input1 = [1, 2, 6, 8]
// var input2 = [2, 9, 6]
// var output = []
// input1.forEach(function(value) {
//     if (input2.includes(value)) {
//         output.push(value)
//     }
//     return output
// })
// console.log(output)
// var input = [NaN, 'hi', '']
// var output = input.map(function(value) {
//     return !!value
// })
// console.log(output)
// var total = input.reduce(function(preValue, curValue) {

//     return preValue + curValue
// }, 1)
// console.log(total)
// var input = [1, 2, [3, 4], 5, 6, [7, 8, 9]]
// var i = input.reduce(function(preValue, curValue) {
//     if (!isNaN(curValue) && typeof curValue == 'number') {
//         return preValue + curValue
//     }
//     return preValue
// }, 0)
// var j = input.reduce((a, b) => { if (!isNaN(b) && typeof b == 'number') { return a + b } return a }, 0)
// console.log(j)


// var output = []
// input.forEach((a) => { return output.push(a) })
// console.log(output)
// var flat = input.reduce((a, b) => { return a.concat(b) }, [])
// console.log(flat)
// var a = 1
// var b = { name: 22 }
// var c = '2'
// console.log(a.concat(c))


// Array.prototype.reduce2 = function(callback, initialValue) {
//     let i = 0
//     if (arguments.length < 2) {
//         i = 1
//         initialValue = this[0]
//     }
//     for (; i < this.length; i++) {
//         initialValue = callback(initialValue, this[i], i, this)
//     }
//     return initialValue
// }
// var i = courses.reduce2(function(a, b) {
//     return a + b.coin
// }, 1)
// Array.prototype.forEach2 = function(callback) {
//     for (var i in this) {
//         if (this.hasOwnProperty(i)) {
//             callback(this[i], i, this)
//         }
//     }
// }

// Array.prototype.some2 = function(callback) {

//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             if (callback(this[i], i, this)) {
//                 return true
//             }
//         }
//     }
//     return false
// }

// var users = [{
//         id: 1,
//         name: 'Thị Ngân'
//     },
//     {
//         id: 2,
//         name: 'Phan Đôn'
//     },
//     {
//         id: 3,
//         name: 'Hung Dam'
//     }
// ]
// var comments = [{
//         id: 1,
//         user_id: 1,
//         content: 'Đi ngủ thôi anh ơi'
//     },
//     {
//         id: 2,
//         user_id: 2,
//         content: 'Chúc ny ngủ ngon S2'
//     },
// ]

// function getComments() {
//     return new Promise(function(resolve) {
//         setTimeout(() => {
//             resolve(comments)
//         }, 3000);
//     })
// }

// function getUsersByIds(userIds) {
//     return new Promise(function(resolve) {
//         setTimeout(() => {
//             var result = users.filter(function(user) {
//                 return userIds.includes(user.id)
//             })
//             resolve(result)
//         }, 1000);
//     })
// }
// getComments()
//     .then(function(comments) {
//         var userIds = comments.map(function(comment) {
//             return comment.user_id
//         })
//         return getUsersByIds(userIds)
//     })
//     .then(function(users) {
//         return {
//             users: users,
//             comments: comments
//         }
//     })
//     .then(function(data) {
//         var commentBlock = document.getElementById('comments-block')
//         var html = ''
//         data.comments.forEach(function(comment) {
//             var user = data.users.find(function(user) {
//                 return user.id === comment.user_id
//             })
//             html += `<li>${user.name}: ${comment.content}</li>`
//         })
//         commentBlock.innerHTML = html
//         console.log(commentBlock)
//     })


var coursesApi = 'https://612e3480d11e5c0017558409.mockapi.io/user'

function start() {
    getCourses(renderCourses)
    handleCreateForm()
    handleUpdateCourse()

}
start()

// functions
function getCourses(callback) {
    fetch(coursesApi)
        .then(function(response) {
            return response.json()
        })
        .then(callback)
}

function createCourse(data, callback) {
    var options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(coursesApi, options)
        .then(function(response) {
            response.json
        })
        .then(callback)
}

function deleteCourse(id, callback) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(coursesApi + '/' + id, options)
        .then(getCourses(renderCourses))
        .then(callback)
}



function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses')
    var htmls = courses.map(function(course) {
        return `
        <li class="course-item-${course.id}">
        <h4>${course.name}</h4>
        <p>${course.description}</p>
        <button onclick="deleteCourse(${course.id},getCourses(renderCourses))">Xóa</button>
        <button onclick="handleUpdateCourse(${course.id})">Sửa</button>
        </li>
        `
    })
    listCoursesBlock.innerHTML = htmls.join('')
}

function handleCreateForm() {
    var createBtn = document.querySelector('#create')
    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value
        var description = document.querySelector('input[name="description"]').value
        var formData = {
            name: name,
            description: description
        }
        createCourse(formData, function() { getCourses(renderCourses) })
    }
}

function updateCourse(id, data, callback) {
    var options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };
    fetch(coursesApi + "/" + id, options)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function handleUpdateCourse(id) {
    var courseItem = document.querySelector(`.course-item-${id}`)
    var getName = courseItem.querySelector("h4").innerText
    var getDescription = courseItem.querySelector("p").innerText
    var name = document.querySelector('input[name="name"]')
    var description = document.querySelector('input[name="description"]')

    name.value = getName
    description.value = getDescription

    var updateBtn = document.querySelector("#update")
    updateBtn.onclick = function() {
        var formData = {
            name: name.value,
            description: description.value
        };
        updateCourse(id, formData, function() { getCourses(renderCourses) })
    }
}