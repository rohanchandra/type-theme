---
layout: post
title: Texo Generated Error When Enum added in ECore Model in EMF
description : Adding enums in emf ecore model and generating texo models from enums generate errors as object could not be recognized in java
---

Some times generating models from ECore models in Eclipse Modeling Framework generates error in File ModelFactory.java. Solution is very easy, as while some times as the ways of coding is becoming so easier with the help of Eclipse Modeling Framework, even single model property can cause a heavy problem.
Lets have a look on easy solution by an example.


Suppose this is the ecore model it have AIRLINES Enum consisting of 5 airlines with integer values assigned and it is a member of Flights class.

![Ecore Model](/img/texo_enums_1.PNG)

When you generate the TEXO model from the ecore model you might get an error on ModelFactory.java class showing the object doesnt have get property.

![Model Factory Error](/img/texo_enums_4.PNG)

<strong>Solution</strong>
When you open the properties of AIRLINES Enum you will see that Instand Type Name is set as AIRLINES same to Name. When we set the type name to Airline EMF automatically set the Class Name as "java.lang.Object" which is coming in the above picture. We have to replace the oject with Airline in order to solve the problem.

![Enum Property](/img/texo_enums_2.PNG)


We have to remove the Type Name to Empty like the following picture and you will see EMF wont auto set the class name to Object:

![Enum Property Solution](/img/texo_enums_5.PNG)

Now when you generate the texo model from ecore model. The model factory will show AIRLINES or your enum type rather then java object and the error will be resolved.

![Enum Property Solution](/img/texo_enums_6.PNG)

