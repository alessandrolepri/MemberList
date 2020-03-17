import './scss/style.scss'


document.addEventListener("DOMContentLoaded", () => {

    const createTable = () => {

        // CREATE MEMBER LIST

        let members = [{

                "Team Member": "Erica Badu",
                "Email": "e.badu@example.com",
                "Permission Level": "Owner"
            },
            {

                "Team Member": "Pat Nelsson",
                "Email": "p.nelsson@example.com",
                "Permission Level": "Admin"
            },
            {

                "Team Member": "Pending acceptance",
                "Email": "j.dog@example.com",
                "Permission Level": "Standard"
            },
            {

                "Team Member": "Amy Namy",
                "Email": "a.namy@example.com",
                "Permission Level": "Standard"
            },
            {

                "Team Member": "Victor D.",
                "Email": "v.d@example.com",
                "Permission Level": "Standard"
            },
            {

                "Team Member": "Olly",
                "Email": "o.hunter@example.com",
                "Permission Level": "Standard"
            },

        ]

        // EXTRACT VALUE FOR HTML HEADER.

        let col = [];
        for (var i = 0; i < members.length; i++) {
            for (var key in members[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // CREATE DYNAMIC TABLE.

        let table = document.createElement("table");

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        let tr = table.insertRow(-1); // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th"); // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.

        for (var i = 0; i < members.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = members[i][col[j]];
            }
        }

        // ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.

        let divContainer = document.querySelector(".box");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);

        table = document.createElement('table');

        document.body.appendChild(table);

        // CREATING BUTTON TO REMOVE MEMBER FROM THE LIST ON CLICK

        let remove = () => {
            $("tr td:nth-last-child(1)")
                .append("<button> </button>");
            $("tr td:nth-last-child(1) button")
                .addClass('remove');

            $("tr td:nth-last-child(3)")
                .prepend("<img> </img>");
            $("tr td:nth-last-child(3) img")
                .attr('class', 'member-pic');

            let removeUser = document.getElementsByClassName('remove');

            for (var i = 0; i < removeUser.length; i++) {
                removeUser[i].addEventListener('click', function (e) {
                    e.preventDefault();
                    this.closest('tr').remove();
                });
            }

            //  ON CLICK CREATE A NEW MEMBER ROW

            let add = document.querySelector('.invite')
            let invite = document.querySelector('.member-add')

            add.addEventListener('click', () => {
                createRow();
            })
            invite.addEventListener('click', () => {
                createRow();
            })
        }

        // ***** NOT WORKING ****

        var imgs = ['.src/images/olly.svg', '.src/images/bin-zappar.png', '.src/images/face-hoodie-zappar.png', '.src/images/olly.png', '.src/images/p-zappar.png', '.src/images/user-zappar.png'];

        for (var i = 0; i < imgs.length; i++) {
            var tr = document.createElement('tr');
            tr.appendChild(document.createElement('td'))
                .appendChild(document.createElement('img'))
                .src = imgs[i];
        }

        remove();

        // ******** CREATE NEW TABLE ROW ON CLICK BUTTON '+' OR 'INVITE' *******

        let createRow = () => {

            let row = document.createElement('tr');

            // CREATE COLUMN NODE

            let col = document.createElement('td');

            // CREATE SECOND COLUMN NODE

            let col2 = document.createElement('td');

            // create THIRD column node

            let col3 = document.createElement('td');

            // APPEND TO ROW

            row.appendChild(col);
            row.appendChild(col2);

            row.appendChild(col);
            row.appendChild(col2);
            row.appendChild(col3);

            let randomNames = [
                "Mark",
                "Laura",
                "Emma",
                "John",
                "Sacha",
                "Hugo"
            ];

            let randomRoles = [
                "Co-owner",
                "Standard",
                "Admin",
                "Receptionist",
                "Warehouse",
                "Marketing"
            ]

            let randomEmails = [
                "m.m@example.com",
                "zappar.zappar@example.com",
                "hi.hi@example.com",
                "test.test@example.com",
                "marketing@test.com",
                "warehouse@example.co.uk"
            ]

            let randomName = randomNames[Math.floor(Math.random() * randomNames.length)];
            let randomRole = randomRoles[Math.floor(Math.random() * randomRoles.length)];
            let randomEmail = randomEmails[Math.floor(Math.random() * randomEmails.length)];


            col.innerHTML = `${randomName}`;
            col2.innerHTML = `${randomEmail}`;
            col3.innerHTML = `${randomRole}`;

            let table = $("tr:last-child");
            table.after(row);

            let bin = document.createElement('button')
            bin.classList.add('remove');

            col3.append(bin)

            let imageMember = document.createElement('img');
            imageMember.classList.add('member-pic')

            col.prepend(imageMember);

            let removeUserRandom = document.getElementsByClassName('remove');

            for (var i = 0; i < removeUserRandom.length; i++) {
                removeUserRandom[i].addEventListener('click', function (e) {
                    e.preventDefault();
                    this.closest('tr').remove();
                })
            };
        }
    }

    createTable();

})