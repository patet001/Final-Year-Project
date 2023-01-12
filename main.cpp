//ACCESS AT http://127.0.0.1/cgi-bin/main.cgi




#include "cgicc/HTTPContentHeader.h"
#include "iostream"
#include <cgicc/HTMLElement.h>
#include "cgicc/HTMLClasses.h"
#include <cgicc/HTMLDoctype.h>
#include <cgicc/Cgicc.h>
#include <cgicc/HTMLDoctype.h>
#include "cgicc/HTTPHTMLHeader.h"
#include "mariadb/conncpp.hpp"



using namespace cgicc;
using namespace std;

int main(int argc, char **argv){
    cgicc::Cgicc cgi;

    cout << HTTPHTMLHeader() << endl;

    //HTML setup
    cout << html() << endl;
    cout << head(title("Home")) << endl;
    cout << h1() << "Social Network" << h1() << endl;

    cout << body() << "Login to continue" << body() << endl;



    //Login Form
    cout<<"<form method='post' action='http://127.0.0.1/cgi-bin/logincheck.cgi' autocomplete = 'off'>"<<endl;
    cout<<"Username : <input type = 'text' name='username' /><br />"<<endl;
    cout<<"Password : <input type='password' name = 'password' /><br />"<<endl;
    cout<<"<INPUT TYPE='submit' NAME = 'submit' VALUE = 'Login'>"<<endl;
    cout<<"</form>"<<endl;

    cout << p() << p() << endl;
    cout << p() << p() << endl;
    cout << p() << "Or Register: " << p() << endl;


    //Create Registration Form -   post not get, insecure to use get as password would be in url
    cout<<"<form method='post' action='http://127.0.0.1/cgi-bin/register.cgi' autocomplete = 'off'>"<<endl;
    cout<<"Username : <input type = 'text' name='username' /><br />"<<endl;
    cout<<"Password : <input type='password' name = 'password' /><br />"<<endl;
    cout<<"<INPUT TYPE='submit' NAME = 'submit' VALUE = 'Register'>"<<endl;
    cout<<"</form>"<<endl;



    cout << html() << endl;
    return 0;
}