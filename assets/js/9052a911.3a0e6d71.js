(self.webpackChunkipc_144=self.webpackChunkipc_144||[]).push([[4381],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return d},kt:function(){return p}});var r=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var o=r.createContext({}),c=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=c(t.components);return r.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,o=t.parentName,d=u(t,["components","mdxType","originalType","parentName"]),k=c(n),p=l,m=k["".concat(o,".").concat(p)]||k[p]||s[p]||a;return n?r.createElement(m,i(i({ref:e},d),{},{components:n})):r.createElement(m,i({ref:e},d))}));function p(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,i=new Array(a);i[0]=k;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u.mdxType="string"==typeof t?t:l,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1985:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return d},default:function(){return k}});var r=n(2122),l=n(9756),a=(n(7294),n(3905)),i=["components"],u={sidebar_position:2},o="Structures",c={unversionedId:"C-Data-Structures/structures",id:"C-Data-Structures/structures",isDocsHomePage:!1,title:"Structures",description:"Learning Outcomes",source:"@site/docs/C-Data-Structures/structures.md",sourceDirName:"C-Data-Structures",slug:"/C-Data-Structures/structures",permalink:"/C-Data-Structures/structures",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/C-Data-Structures/structures.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"courseNotesSidebar",previous:{title:"Arrays",permalink:"/C-Data-Structures/arrays"},next:{title:"Functions",permalink:"/D-Modularity/functions"}},d=[{value:"Learning Outcomes",id:"learning-outcomes",children:[]},{value:"Introduction",id:"introduction",children:[]},{value:"Types",id:"types",children:[{value:"Primitive Types",id:"primitive-types",children:[]},{value:"Derived Types",id:"derived-types",children:[]},{value:"Declaration",id:"declaration",children:[]},{value:"Allocating Memory",id:"allocating-memory",children:[]},{value:"Initialization",id:"initialization",children:[]}]},{value:"Member Access",id:"member-access",children:[]},{value:"Walkthrough",id:"walkthrough",children:[]}],s={toc:d};function k(t){var e=t.components,n=(0,l.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"structures"},"Structures"),(0,a.kt)("h2",{id:"learning-outcomes"},"Learning Outcomes"),(0,a.kt)("p",null,"After reading this section, you will be able to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Design data collections using structures to manage information efficiently")),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"The most commonly used data structure in C language programs aside from the array is the struct or structure.  A structure type is a collection of not necessarily identical types.  We use the structure type to define a group of variables as a single object. "),(0,a.kt)("p",null,"This chapter reviews the primitive types and presents the syntax for declaring a structure type, defining an object of structure type, and accessing the data values within that object.  This chapter includes an example of how to walkthrough a program that includes structure types."),(0,a.kt)("h2",{id:"types"},"Types"),(0,a.kt)("p",null,"A type describes how to interpret the information stored in a region of memory.  In the C language, a type may be a primitive type or a derived type.  A derived type is a collection of other types."),(0,a.kt)("h3",{id:"primitive-types"},"Primitive Types"),(0,a.kt)("p",null,"The core language defines the primitive types.  We cannot redefine these types or introduce new primitive types.  The C language primitive types include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"char"),(0,a.kt)("li",{parentName:"ul"},"int"),(0,a.kt)("li",{parentName:"ul"},"float"),(0,a.kt)("li",{parentName:"ul"},"double")),(0,a.kt)("p",null,"Each type defines how a value of that type is stored in a region of memory.  Consider the int type.  A value of int type is stored in equivalent binary representation in 4 bytes on a 32-bit platform:"),(0,a.kt)("table",{border:"0"},(0,a.kt)("td",{align:"center",colspan:"32"},"int (32-bit platform)"),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center",colspan:"8"},"1 Byte"),(0,a.kt)("td",{align:"center",colspan:"8"},"1 Byte"),(0,a.kt)("td",{align:"center",colspan:"8"},"1 Byte"),(0,a.kt)("td",{align:"center",colspan:"8"},"1 Byte")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"\xa0"),(0,a.kt)("td",{align:"center"},"\xa0"),(0,a.kt)("td",{align:"center"},"\xa0"),(0,a.kt)("td",{align:"center"},"\xa0"),(0,a.kt)("td",{align:"center"},"\xa0"),(0,a.kt)("td",{align:"center"},"\xa0"),(0,a.kt)("td",{align:"center"},"\xa0"),(0,a.kt)("td",{align:"center"},"\xa0"),(0,a.kt)("td",{align:"center"},"\xa0"),(0,a.kt)("td",{align:"center"},"\xa0"),(0,a.kt)("td",{align:"center"},"\xa0"),(0,a.kt)("td",{align:"center"},"\xa0"),(0,a.kt)("td",{align:"center"},"\xa0"),(0,a.kt)("td",{align:"center"},"\xa0"),(0,a.kt)("td",{align:"center"},"\xa0"),(0,a.kt)("td",{align:"center"},"\xa0"),(0,a.kt)("td",{align:"center"},"\xa0"),(0,a.kt)("td",{align:"center"},"\xa0"),(0,a.kt)("td",{align:"center"},"\xa0"),(0,a.kt)("td",{align:"center"},"\xa0"),(0,a.kt)("td",{align:"center"},"\xa0"),(0,a.kt)("td",{align:"center"},"\xa0"),(0,a.kt)("td",{align:"center"},"\xa0"),(0,a.kt)("td",{align:"center"},"\xa0"),(0,a.kt)("td",{align:"center"},"\xa0"),(0,a.kt)("td",{align:"center"},"\xa0"),(0,a.kt)("td",{align:"center"},"\xa0"),(0,a.kt)("td",{align:"center"},"\xa0"),(0,a.kt)("td",{align:"center"},"\xa0"),(0,a.kt)("td",{align:"center"},"\xa0"),(0,a.kt)("td",{align:"center"},"\xa0"),(0,a.kt)("td",{align:"center"},"\xa0"))),(0,a.kt)("p",null,"To define an object of int type called noSubjects, we write:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"int noSubjects;\n")),(0,a.kt)("h3",{id:"derived-types"},"Derived Types"),(0,a.kt)("p",null,"The declaration of a derived type in the C language takes the form"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"struct Tag\n{\n        //... declarations here\n};\n")),(0,a.kt)("p",null,"where the keyword ",(0,a.kt)("inlineCode",{parentName:"p"},"struct")," identifies a derived type or structure.  ",(0,a.kt)("inlineCode",{parentName:"p"},"Tag")," is the name by which we call the structure (just like ",(0,a.kt)("inlineCode",{parentName:"p"},"int")," above).  The declaration concludes with a semi-colon."),(0,a.kt)("p",null,"We list the types that belong to the structure along with their identifiers within the curly braces."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"struct Tag<br>\n{\n        // [type] [identifier];\n        // ... other types\n};\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"type")," is the member's type.  ",(0,a.kt)("inlineCode",{parentName:"p"},"identifier")," is the name by which we access the member's value. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("p",null,"Consider a structure type that consists of two pieces of information:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the student's ID number"),(0,a.kt)("li",{parentName:"ul"},"the student's grades (up to 4 individual grades)")),(0,a.kt)("p",null,"Let us call this structure type ",(0,a.kt)("inlineCode",{parentName:"p"},"Student"),".  To declare the type, we write:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"struct Student\n{\n    int idNum;       // student number \n    float grade[4];  // grades\n };\n")),(0,a.kt)("p",null,"The members occupy memory in the order in which we have listed them in the declaration of our structure:"),(0,a.kt)("table",{border:"0"},(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"struct"),(0,a.kt)("td",{align:"center",colspan:"20"},"Student")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"member"),(0,a.kt)("td",{align:"center",colspan:"4"},"int ",(0,a.kt)("br",null),(0,a.kt)("b",null,"idNum")),(0,a.kt)("td",{align:"center",colspan:"16"},"float",(0,a.kt)("br",null),(0,a.kt)("b",null,"grade[]"))),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"bytes"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: This declaration does not allocate any memory for any object; it only defines the structure and the rules for objects of that type. ")),(0,a.kt)("h3",{id:"declaration"},"Declaration"),(0,a.kt)("p",null,"We declare our structure globally and may store its declaration in a separate file called a header file (say, with the name ",(0,a.kt)("inlineCode",{parentName:"p"},"Student.h"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"// Student.h\n\nstruct Student\n{\n        int idNum;       // student number \n        float grade[4];  // grades\n};\n")),(0,a.kt)("p",null,"When we place source code in a header (",(0,a.kt)("inlineCode",{parentName:"p"},".h"),") file, we insert that header file's code into the source file that requires that information, as shown below.  In such cases, our complete source code is stored in more than one file.  When compiling multi-file source code, we only pass the ",(0,a.kt)("inlineCode",{parentName:"p"},".c")," file(s) to the compiler.  The code in a header file is duplicated inside each C file in which it is included, which allows us to write code, like a ",(0,a.kt)("inlineCode",{parentName:"p"},"struct"),", in one spot and edit it in that one spot alone."),(0,a.kt)("h3",{id:"allocating-memory"},"Allocating Memory"),(0,a.kt)("p",null,"When we define an object of a structure, we allocate memory for that object.  Our definition takes the form:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"struct Tag identifier;\n")),(0,a.kt)("p",null,"where ",(0,a.kt)("inlineCode",{parentName:"p"},"Tag")," is the name of the structure and ",(0,a.kt)("inlineCode",{parentName:"p"},"identifier")," is the name of the object. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("p",null,"To allocate memory for a ",(0,a.kt)("inlineCode",{parentName:"p"},"Student")," named ",(0,a.kt)("inlineCode",{parentName:"p"},"harry"),", we write:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'// main.c\n\n#include "Student.h" // includes the description of a Student \n\nint main(void)\n{\n       struct Student harry; // allocates memory for harry \n\n       // ...\n\n       return 0;\n}\n')),(0,a.kt)("table",{border:"0"},(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"struct"),(0,a.kt)("td",{align:"center",colspan:"20"},"Student",(0,a.kt)("br",null),(0,a.kt)("b",null,"harry"))),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"address"),(0,a.kt)("td",{align:"center",colspan:"20"},(0,a.kt)("b",null,"2ff2b8c4"))),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"member"),(0,a.kt)("td",{align:"center",colspan:"4"},"int",(0,a.kt)("br",null),(0,a.kt)("b",null,"idNum")),(0,a.kt)("td",{align:"center",colspan:"16"},"float",(0,a.kt)("br",null),(0,a.kt)("b",null,"grade[]"))),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"address"),(0,a.kt)("td",{align:"center",colspan:"4"},(0,a.kt)("b",null,"2ff2b8c4")),(0,a.kt)("td",{align:"center",colspan:"16"},(0,a.kt)("b",null,"2ff2b8c8"))),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"bytes"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"))),(0,a.kt)("p",null,"The object name ",(0,a.kt)("inlineCode",{parentName:"p"},"harry")," refers to the collection of members in ",(0,a.kt)("inlineCode",{parentName:"p"},"Student harry")," taken together. "),(0,a.kt)("h3",{id:"initialization"},"Initialization"),(0,a.kt)("p",null,"To initialize an object of a structure we add a braces-enclosed, comma-separated list of values.  We organize the initial values in the same order as the member listing in the declaration of the structure.  The initialization takes the form:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"struct Tag identifier = { value, ... , value };\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note the similarity to the initialization of an array. ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("p",null,"To initialize ",(0,a.kt)("inlineCode",{parentName:"p"},"harry")," with student number ",(0,a.kt)("inlineCode",{parentName:"p"},"975")," and grades of ",(0,a.kt)("inlineCode",{parentName:"p"},"75.6"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"82.3")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"68.9"),", we write:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"struct Student harry = { 975, { 75.6f, 82.3f, 68.9f } };\n")),(0,a.kt)("table",{border:"0"},(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"struct"),(0,a.kt)("td",{align:"center",colspan:"20"},"Student",(0,a.kt)("br",null),(0,a.kt)("b",null,"harry"))),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"address"),(0,a.kt)("td",{align:"center",colspan:"20"},(0,a.kt)("b",null,"2ff2b8c4"))),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"member"),(0,a.kt)("td",{align:"center",colspan:"4"},"int",(0,a.kt)("br",null),(0,a.kt)("b",null,"idNum")),(0,a.kt)("td",{align:"center",colspan:"16"},"float",(0,a.kt)("br",null),(0,a.kt)("b",null,"grade[]"))),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"address"),(0,a.kt)("td",{align:"center",colspan:"4"},(0,a.kt)("b",null,"2ff2b8c4")),(0,a.kt)("td",{align:"center",colspan:"16"},(0,a.kt)("b",null,"2ff2b8c8"))),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"value"),(0,a.kt)("td",{colspan:"4"},"975"),(0,a.kt)("td",{colspan:"4"},"75.6f"),(0,a.kt)("td",{colspan:"4"},"82.3f"),(0,a.kt)("td",{colspan:"4"},"68.9f"),(0,a.kt)("td",{colspan:"4"},"0.0f"))),(0,a.kt)("h2",{id:"member-access"},"Member Access"),(0,a.kt)("p",null,"To access a member of an object of a structure, we use the dot operator.  Dot notation takes the form:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"object.member\n")),(0,a.kt)("p",null,"To access ",(0,a.kt)("inlineCode",{parentName:"p"},"harry"),"'s student number, we write:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"harry.idNum\n")),(0,a.kt)("p",null,"To retrieve the address of a non-array member of an object, we use the address of operator (",(0,a.kt)("inlineCode",{parentName:"p"},"&"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"&instance.member\n")),(0,a.kt)("p",null,"To access the address of ",(0,a.kt)("inlineCode",{parentName:"p"},"harry"),"'s student number, we write:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"&harry.idNum\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: We may omit the parentheses here - ",(0,a.kt)("inlineCode",{parentName:"p"},"&(harry.idNum)")," - they are unnecessary because the dot (",(0,a.kt)("inlineCode",{parentName:"p"},"."),") operator binds tighter than the address-of operator (see the ",(0,a.kt)("a",{parentName:"p",href:"/Resources-Appendices/operators"},"precedence")," table). ")),(0,a.kt)("p",null,"To access an array member, we refer to its name without brackets.  For example, to access the address of ",(0,a.kt)("inlineCode",{parentName:"p"},"harry"),"'s grades, we write:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"harry.grade\n")),(0,a.kt)("p",null,"To access an element of an array member, we use subscript notation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"object.member[index]\n")),(0,a.kt)("p",null,"To access ",(0,a.kt)("inlineCode",{parentName:"p"},"harry"),"'s ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"third"))," grade, we write:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"harry.grade[2]\n")),(0,a.kt)("p",null,"To retrieve the address of an element of an array member, we use the address of operator (",(0,a.kt)("inlineCode",{parentName:"p"},"&"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"&object.member[index]\n")),(0,a.kt)("p",null,"To access the address of ",(0,a.kt)("inlineCode",{parentName:"p"},"harry"),"'s ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"third"))," grade, we write:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"&harry.grade[2]\n")),(0,a.kt)("table",{border:"0"},(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"struct"),(0,a.kt)("td",{align:"center",colspan:"20"},"Student",(0,a.kt)("br",null),(0,a.kt)("b",null,"harry"))),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"address"),(0,a.kt)("td",{align:"center",colspan:"20"},(0,a.kt)("b",null,"&harry"))),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"member"),(0,a.kt)("td",{align:"center",colspan:"4"},"int",(0,a.kt)("br",null),(0,a.kt)("b",null,"idNum")),(0,a.kt)("td",{align:"center",colspan:"16"},"float",(0,a.kt)("br",null),(0,a.kt)("b",null,"grade[]"))),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"address"),(0,a.kt)("td",{align:"center",colspan:"4"},(0,a.kt)("b",null,"&harry.idNum")),(0,a.kt)("td",{align:"center",colspan:"16"},(0,a.kt)("b",null,"harry.grade"))),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"value"),(0,a.kt)("td",{colspan:"4"},"975"),(0,a.kt)("td",{colspan:"4"},"75.6f"),(0,a.kt)("td",{colspan:"4"},"82.3f"),(0,a.kt)("td",{colspan:"4"},"68.9f"),(0,a.kt)("td",{colspan:"4"},"0.0f"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"EXAMPLE")),(0,a.kt)("p",null,"A convenient alternative to parallel arrays for storing tabular information is an array of structures.  One member holds the key, while the other member holds the data. "),(0,a.kt)("p",null,"In the following example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"sku")," member holds the stock keeping unit (sku) for a product, while ",(0,a.kt)("inlineCode",{parentName:"p"},"price")," holds its unit price.  The header file with the declaration of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Product")," structure contains:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"// Structure Example\n// product.h\n\nstruct Product\n{\n        int sku;\n        double price;\n};\n")),(0,a.kt)("p",null,"The program that uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"Product")," structure is listed below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'// Structure Example\n// structure.c\n\n#include <stdio.h>\n#include "product.h"\n\nint main(void)\n{\n        int i;\n        struct Product product[] = { {2156, 2.34}, {4633, 7.89},\n                                     {3122, 6.56}, {5611, 9.32}  };\n        const int n = 4;\n\n        printf("  SKU Price\\n");\n        for (i = 0; i < n; i++)\n        {\n                printf("%5d $%.2lf\\n", product[i].sku, product[i].price); \n        }\n\n        return 0;\n}\n')),(0,a.kt)("p",null,"The output produced from the above sample is shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  SKU Price \n 2156 $2.34\n 4633 $7.89\n 3122 $6.56\n 5611 $9.32\n")),(0,a.kt)("h2",{id:"walkthrough"},"Walkthrough"),(0,a.kt)("p",null,"A walkthrough table for a program with structure types includes lists the member types below the object identifiers.  The table for the example above is shown below."),(0,a.kt)("p",null,"The table includes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the structure type of each object"),(0,a.kt)("li",{parentName:"ul"},"the identifer of each object"),(0,a.kt)("li",{parentName:"ul"},"the type of each member"),(0,a.kt)("li",{parentName:"ul"},"the identifier of each member")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note the breakdown of each object into its members in the head of the table.  We reserve a separate line for the addresses of the different objects:")),(0,a.kt)("table",{border:"0"},(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"2"},"\xa0"),(0,a.kt)("td",{align:"center",colspan:"2"},"struct",(0,a.kt)("br",null),"Product"),(0,a.kt)("td",{align:"center",colspan:"2"},"struct",(0,a.kt)("br",null),"Product"),(0,a.kt)("td",{align:"center",colspan:"2"},"struct",(0,a.kt)("br",null),"Product"),(0,a.kt)("td",{align:"center",colspan:"2"},"struct",(0,a.kt)("br",null),"Product")),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"2"},"\xa0"),(0,a.kt)("td",{align:"center",colspan:"2"},"product[0]"),(0,a.kt)("td",{align:"center",colspan:"2"},"product[1]"),(0,a.kt)("td",{align:"center",colspan:"2"},"product[2]"),(0,a.kt)("td",{align:"center",colspan:"2"},"product[3]")),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"2"},"\xa0"),(0,a.kt)("td",{colspan:"2"},"1000"),(0,a.kt)("td",{colspan:"2"},"100C"),(0,a.kt)("td",{colspan:"2"},"1018"),(0,a.kt)("td",{colspan:"2"},"1024")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"int"),(0,a.kt)("td",{align:"center"},"int"),(0,a.kt)("td",{align:"center"},"int"),(0,a.kt)("td",{align:"center"},"double"),(0,a.kt)("td",{align:"center"},"int"),(0,a.kt)("td",{align:"center"},"double"),(0,a.kt)("td",{align:"center"},"int"),(0,a.kt)("td",{align:"center"},"double"),(0,a.kt)("td",{align:"center"},"int"),(0,a.kt)("td",{align:"center"},"double")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"i"),(0,a.kt)("td",{align:"center"},"n"),(0,a.kt)("td",{align:"center"},"sku"),(0,a.kt)("td",{align:"center"},"price"),(0,a.kt)("td",{align:"center"},"sku"),(0,a.kt)("td",{align:"center"},"price"),(0,a.kt)("td",{align:"center"},"sku"),(0,a.kt)("td",{align:"center"},"price"),(0,a.kt)("td",{align:"center"},"sku"),(0,a.kt)("td",{align:"center"},"price")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"\xa0"),"    ",(0,a.kt)("td",{align:"center"},"4"),"    ",(0,a.kt)("td",null,"\xa0"),"    ",(0,a.kt)("td",null,"\xa0"),"    ",(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),"    ",(0,a.kt)("td",null,"\xa0"),"    ",(0,a.kt)("td",null,"\xa0"),"    ",(0,a.kt)("td",null,"\xa0"),"    ",(0,a.kt)("td",null,"\xa0")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"\xa0"),"    ",(0,a.kt)("td",{align:"center"},"4"),"    ",(0,a.kt)("td",null,"\xa0"),"    ",(0,a.kt)("td",null,"\xa0"),"    ",(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),"    ",(0,a.kt)("td",null,"\xa0"),"    ",(0,a.kt)("td",null,"\xa0"),"    ",(0,a.kt)("td",null,"\xa0"),"    ",(0,a.kt)("td",null,"\xa0")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"\xa0"),"    ",(0,a.kt)("td",{align:"center"},"4"),"    ",(0,a.kt)("td",null,"\xa0"),"    ",(0,a.kt)("td",null,"\xa0"),"    ",(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),"    ",(0,a.kt)("td",null,"\xa0"),"    ",(0,a.kt)("td",null,"\xa0"),"    ",(0,a.kt)("td",null,"\xa0"),"    ",(0,a.kt)("td",null,"\xa0")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"\xa0"),"    ",(0,a.kt)("td",{align:"center"},"4"),"    ",(0,a.kt)("td",null,"\xa0"),"    ",(0,a.kt)("td",null,"\xa0"),"    ",(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),"    ",(0,a.kt)("td",null,"\xa0"),"    ",(0,a.kt)("td",null,"\xa0"),"    ",(0,a.kt)("td",null,"\xa0"),"    ",(0,a.kt)("td",null,"\xa0")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"\xa0"),"    ",(0,a.kt)("td",{align:"center"},"4"),"    ",(0,a.kt)("td",null,"\xa0"),"    ",(0,a.kt)("td",null,"\xa0"),"    ",(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),"    ",(0,a.kt)("td",null,"\xa0"),"    ",(0,a.kt)("td",null,"\xa0"),"    ",(0,a.kt)("td",null,"\xa0"),"    ",(0,a.kt)("td",null,"\xa0"))),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"_______________________________________________________________\n\n_______________________________________________________________\n\n_______________________________________________________________\n\n_______________________________________________________________\n")))}k.isMDXComponent=!0}}]);