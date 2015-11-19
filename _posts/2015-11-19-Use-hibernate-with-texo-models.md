---
layout: post
title: Use Hibernate with Texo Model Entities
description : Generating texo models and link with hibernate can be sometime rude giving exception as Failed to create sessionFactory ArrayList cannot be cast to Set
---


[Hibernate](http://hibernate.org/orm/) is the best [ORM](https://en.wikipedia.org/wiki/Object-relational_mapping) in Java. It provides a wrapper in .NET also as NHiberate.
But it can be tough when you have alot of entities to create manually and create a reference between them. The most comprehensive task is to manually develop the relationship between them. Yes there is database-approach also which generates all the things from the database, We are currently supposing model first approach and then connect database with it. 

Eclipse provides many tools to generate the simple POJO classes by a simple visualizer. [Texo](http://wiki.eclipse.org/Texo) is one of the good plugin in Eclipse that generate entities from EMF ecore models. When you connect the texo generated entities with hibernate via mapping in XML files. It pop out an error that

<blockquote>
<p>
Failed to create sessionFactory object.java.lang.ClassCastException: java.util.ArrayList cannot be cast to java.util.Set
</p>
</blockquote>


Because the Texo genenates entities with LIST type and hibernate gives an error. We can to generate all the Collection objects as a SET in order to solve the problem.
<blockquote>
<p>
To resolve the problem we have to generate the ORM ANNOTATED MODEL and set all the collection attributes "use list" property to false
</p>
</blockquote>

![Generate the Texo Hibernate](/img/texo_hibernate1.PNG)

![Selecting the collection object](/img/texo_hibernate2.PNG)

![Create new Gen Annotation for object](/img/texo_hibernate3.PNG)

![set use list = false](/img/texo_hibernate4.PNG)



