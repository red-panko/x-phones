    function SiteToForum()
    {
        var siteformat = $('#siteformat').val();

        while(siteformat.charAt(0) === '0')
        {
            siteformat = siteformat.substr(1);
        }
    
        console.log('siteformat after preprocessing: ' + siteformat);	


        var parsednum = libphonenumber.parse(siteformat,'UA');
        console.log('parsed = ' + parsednum.phone);
        var d = parsednum.phone.split('');
        var forumformat = '8(0' + d[0]+d[1]+')'+d[2]+d[3]+d[4]+'-'+d[5]+d[6]+'-'+d[7]+d[8];
        console.log(forumformat);
        $('#forumformat').val(forumformat);
    }
    
    function ForumToSite()
    {
        var forumformat = $('#forumformat').val();
        console.log('forumformat = ' + forumformat);
        
        while(forumformat.charAt(0) !== '(')
        {
            forumformat = forumformat.substr(1);
        }
    
        console.log('forumformat after preprocessing: ' + forumformat);

        var parsednum = libphonenumber.parse(forumformat,'UA');
         
        if(!parsednum) return;

        console.log('parsed = ' + parsednum.phone);
        var siteformat = parsednum.phone;
        $('#siteformat').val(siteformat);
    }
    
    function searchSite()
    {
        var url = 'https://www.google.com/search?';
        url = url + 'q=site%3A%28www.lonely-girl.kiev.ua+OR+top-modals.com+OR+naberu.com+OR+intim-uslugi.info+OR+prostikom.com+OR+smssex.com.ua%29+%22';
        url = url + $('#siteformat').val(); ;
        url = url + '%22&filter=0';
        window.open(url,'_blank');
    }
    
    function searchUkrgo()
    {
        var url = 'http://kiev.ukrgo.com/search.php?'
        url = url + 'search=' 
        url = url + $('#siteformat').val(); ;
        window.open(url,'_blank');
    }	
        
    function searchForum()
    {
        
        var url = 'http://www.kiev-x.in/search.php?action=search&keywords=';
        url = url + $('#forumformat').val();
        url = url + '&search_in=all&sort_by=0&sort_dir=DESC&show_as=topics';
        window.open(url,'_blank');
        //author=&forum=-1&search_in=all&sort_by=0&sort_dir=DESC&show_as=topics&search=%CE%F2%EF%F0%E0%E2%E8%F2%FC
    }

    function searchUkrgo()
    {
        var url = 'http://kiev.ukrgo.com/search.php?'
        url = url + 'search=' 
        url = url + $('#siteformat').val(); ;
        window.open(url,'_blank');
    }

    function ClearAll()
    {
        console.log('Clearing text');
        $('#siteformat').val('');
        $('#forumformat').val('');
    }