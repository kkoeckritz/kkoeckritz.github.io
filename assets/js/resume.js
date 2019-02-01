flashBrand();
enablePrint();
enableAttn();

function flashBrand() {
    // store individual letters
    let b_letters = [
        'o',
        'e',
        'c'
    ];
    let f_letters = [
        'K',
        'r',
        'i',
        's'
    ];
    let l_letters = [
        'k',
        'r',
        'i',
        't',
        'z'
    ];

    // replace name with site brand
    let f_name = $("#f_name");
    let l_name = $("#l_name");

    f_name.text("");
    l_name.text("K");
    $("#tld").hide().text(".io");
    
    // f_name.fadeIn(500);
    // l_name.fadeIn(500);

    // animate to brand
    console.log("start flashBrand()...");
    let i = 0;
    let b_int = setInterval(() => {

        let cur_b = l_name.text();
        if (cur_b != "Koec") {
            l_name.text(cur_b + b_letters[i]);
        } else {
            clearInterval(b_int);
            console.log("finished.")
        }

        i++;
    }, 100);

    setTimeout(() => {
        $("#tld").fadeIn(500);
        setTimeout(() => {
            $("#tld").fadeOut(250);
        }, 1900);
    }, 500);


    // animate back to name
    setTimeout(() => {
        
        // get rid of tld
        

        // add back letters to first name
        let j = 0;
        let f_int = setInterval(() => {
            let cur_f = f_name.text();
            if (cur_f != "Kris") {
                f_name.text(cur_f + f_letters[j]);
            } else {
                clearInterval(f_int);
            }

            j++;
        }, 25);

        setTimeout(() => {
            // ditto second name
            let k = 0;
            let l_int = setInterval(() => {

                let cur_l = l_name.text();
                if (cur_l != "Koeckritz") {
                    l_name.text(cur_l + l_letters[k]);
                } else {
                    clearInterval(l_int);
                    console.log("finished.")
                }

                k++;
            }, 25);            
        }, 100);
    }, 2500);
}

function enablePrint() {
    setTimeout(() => {
        $("#print_page").click(() => {
            window.print();
        });
        $("#print_page").fadeIn(500);
        console.log("ready to print.");
    }, 2500);
}

function enableAttn() {
    if (localStorage.getItem("attn_hide") === null) {
        setTimeout(() => {
            $("#attn_box").slideDown(250);
            enableClose();
        }, 2500);
    }
}

function enableClose() {
    $("#close_btn").one("click", () => {
        $("#attn_box").slideUp(250);
        localStorage.setItem("attn_hide", 1);
    });
    console.log("ready to close attn.");
}
