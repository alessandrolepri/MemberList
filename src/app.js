import './scss/style.scss'


document.addEventListener("DOMContentLoaded", () => {

    const CreateTable = () => {

        // CREATE MEMBER LIST

        var members = [{

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

        var col = [];
        for (var i = 0; i < members.length; i++) {
            for (var key in members[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // CREATE DYNAMIC TABLE.

        var table = document.createElement("table");

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1); // TABLE ROW.

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

        var divContainer = document.querySelector(".box");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);

        table = document.createElement('table');

        document.body.appendChild(table);

        // CREATING BUTTON TO REMOVE MEMBER FROM THE LIST ON CLICK

        $("tr td:nth-last-child(1)").append("<button> </button>");
        $("tr td:nth-last-child(1) button").addClass('remove');

        $("tr td:nth-last-child(3)").prepend("<img> </img>");
        $("tr td:nth-last-child(3) img").attr('id', 'member-pic');
    }

    CreateTable();

})