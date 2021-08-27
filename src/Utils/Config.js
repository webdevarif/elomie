import logo_desktop_dark from '../Components/Header/logo-dark.png';
import logo_desktop_white from '../Components/Header/logo-white.png';
import logo_small from '../Components/Header/favicon.png';

class Config{

    // SITE INFO
    static siteTitle = "Elomie Info"
    static logo_white = logo_desktop_white
    static logo_dark = logo_desktop_dark
    static logoSm = logo_small

    // PAGES URL
    static homePageUrl = "/";
    static loginPageUrl = "/login";
    static registerPageUrl = "/register";
    static profilePageUrl = "/profile";
    static dashboardPageUrl = "/dashboard";
    static earningsPageUrl = "/earnings";
    static forgetPageUrl = "/forget-password";
    static blogPageUrl = "/blog";
    static blogSinglePageUrl = "/blog/:slug";
    static createBlogPostUrl = "/blog-create";
    static termsConditionPageUrl = "/terms-conditions";
    static privacyPolicyPageUrl = "/privacy-policy";
    static logoutPageUrl = "/logout";


    
    static numFormatter(num) {
        if(num > 999 && num < 1000000){
            return (num/1000).toFixed(1).replace(/\.?0+$/, '') + 'K'; // convert to K for number from > 1000 < 1 million 
        }else if(num > 1000000){
            return (num/1000000).toFixed(1).replace(/\.?0+$/, '') + 'M'; // convert to M for number from > 1 million 
        }else return num; // if value < 1000, nothing to do
      }
    
        static getName(user) {
          if(user.first_name === null && user.last_name === null){
              return 'Unknown User';
          }else if(user.first_name !== null && user.last_name === null){
              return user.first_name; 
          }else if(user.first_name === null && user.last_name !== null){
              return user.last_name;
          }else {
              return (user.first_name + " " + user.last_name); 
          }
        }
    
        // static getImage(url) {
        //     if (url !== null){
        //       return (`http://localhost:8000/media/`+ url)
        //     } else return (Placeholder)
        // }
    
        static truncate(str, count) {
          var subsc = (count - 3);
          return str.length > count ? str.substring(0, subsc) + "..." : str;      
        }

        static getSinceTime(time) {
    
            switch (typeof time) {
              case 'number':
                break;
              case 'string':
                time = +new Date(time);
                break;
              case 'object':
                if (time.constructor === Date) time = time.getTime();
                break;
              default:
                time = +new Date();
            }
            var time_formats = [
              [60, 'seconds', 1], // 60
              [120, '1 minute ago', '1 minute from now'], // 60*2
              [3600, 'minutes', 60], // 60*60, 60
              [7200, '1 hour ago', '1 hour from now'], // 60*60*2
              [86400, 'hours', 3600], // 60*60*24, 60*60
              [172800, 'Yesterday', 'Tomorrow'], // 60*60*24*2
              [604800, 'days', 86400], // 60*60*24*7, 60*60*24
              [1209600, 'Last week', 'Next week'], // 60*60*24*7*4*2
              [2419200, 'weeks', 604800], // 60*60*24*7*4, 60*60*24*7
              [4838400, 'Last month', 'Next month'], // 60*60*24*7*4*2
              [29030400, 'months', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
              [58060800, 'Last year', 'Next year'], // 60*60*24*7*4*12*2
              [2903040000, 'years', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
              [5806080000, 'Last century', 'Next century'], // 60*60*24*7*4*12*100*2
              [58060800000, 'centuries', 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
            ];
            var seconds = (+new Date() - time) / 1000,
              token = 'ago',
              list_choice = 1;
          
            if (seconds === 0) {
              return 'Just now'
            }
            if (seconds < 0) {
              seconds = Math.abs(seconds);
              token = 'from now';
              list_choice = 2;
            }
            var i = 0,
              format;
            while (format === time_formats[i++])
              if (seconds < format[0]) {
                if (typeof format[2] === 'string')
                  return format[list_choice];
                else
                  return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
              }
            return time;
          }
          

}
export default Config;