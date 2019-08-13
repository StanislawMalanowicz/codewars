// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.For example:

function domainName(url) {
    //your code here
    url = url.replace('http://', '');
    url = url.replace('https://', '');
    url = url.replace('www.', '');
    var nr = url.indexOf('.')
    var name = url.split('').splice(0, nr).join('')

    return name;
}