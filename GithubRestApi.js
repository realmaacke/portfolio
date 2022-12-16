user = 'realmaacke'
apirepo = `https://api.github.com/users/${user}`


body_row_1 = document.getElementById('body_row_1');
body_row_2 = document.getElementById('body_row_2');
$.getJSON(apirepo + '/repos', function (data) {
    console.log('data now', data)

    function compare(a, b) {
        if (a.watchers > b.watchers) {
            return -1
        }
        if (a.watchers < b.watchers) {
            return 1
        }
        return 0
    }

    data.sort(compare)
    data.forEach(v => {

        //item start
        body_item = document.createElement('div');
        body_item.setAttribute('id', 'body_item');
        //item header
        body_header = document.createElement('div');
        body_header.setAttribute('id', 'body_item_header');
        // item header icon
        icon = document.createElement('i');
        icon.setAttribute('class', "fa-regular fa-folder");

        // item body
        body_item_content = document.createElement('div');
        body_item_content.setAttribute('id', 'body_item_content');
        item_txt = document.createElement('p');
        br = document.createElement('br');
        item_title = document.createElement('a');
        item_title.setAttribute('id', 'item_title');
        item_desc = document.createElement('a');
        item_desc.setAttribute('id', 'desc');

        // item footer
        body_item_footer = document.createElement('div');
        body_item_footer.setAttribute('id', 'body_item_footer');
        body_item_p = document.createElement('p');
        body_item_footer.appendChild(body_item_p);
        

        body_item.appendChild(body_header); // apend header
        body_header.appendChild(icon);  // apend header icon

        body_item.appendChild(body_item_content); // append content
        body_item_content.appendChild(item_txt); // append text 
        item_txt.appendChild(item_title);   // appent title to txt
        item_txt.appendChild(br);
        item_txt.appendChild(item_desc);

        body_item.appendChild(body_item_footer);

        if(body_row_1.childElementCount <= 5){
            body_row_1.appendChild(body_item);
        }
        else {
            body_row_2.appendChild(body_item);
        }

        var name = `${v.name}` + " ";
        var desc = `${v.description}`;

        var topic = `${v.topics}`;

        item_title.textContent = name;
        item_title.href = v.html_url;
        item_desc.href = v.html_url;

        if(`${v.description}` == "null" ){
            desc = "Missing description";
        }
            item_desc.textContent = desc;

        body_item_p.textContent = topic;
        
        // title = document.getElementById('item_title');
        // description = document.getElementById('item_desc');


        // title.textContent = `${v.description} | Stars: ${v.watchers}`

        // listrepos.appendChild(listItemRepo)
        // hlink = document.createElement('a')
        // listItemRepo.appendChild(hlink)
        // hlink.textContent = `${v.description} | Stars: ${v.watchers}`
        // hlink.href = v.html_url
    })
})