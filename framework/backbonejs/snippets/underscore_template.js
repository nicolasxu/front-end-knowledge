<%- %>
means output will be displayed (and escaped).

<% %> tags which allow arbitrary javascript to be
executed (such as an if condition), and 

<%= %> which displays the data after interpreting (without
escaping any HTML).



// if condition
<% if (typeof(date) !== "undefined") { %>
    <span class="date"><%= date %></span>
<% } %>
// Remember that in underscore.js templates if and for are 
// just standard javascript syntax wrapped in <% %> tags.