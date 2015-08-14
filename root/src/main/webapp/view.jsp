<%--
/**
 * Copyright (c) 2000-present Liferay, Inc. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation; either version 2.1 of the License, or (at your option)
 * any later version.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */
--%>

<%@ page import="com.liferay.portal.kernel.util.GetterUtil"%>
<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>
<portlet:defineObjects />
<div class="widget_<portlet:namespace />"></div>
<script src="${renderRequest.contextPath}/build/vendor.bundle.js"></script>
<script src="${renderRequest.contextPath}/build/App.js"></script>
<script src="${renderRequest.contextPath}/build/Widget.js"></script>
<%
	//set up bools to be passed to widget
	String {%= ConfigBool1 %} = GetterUtil.getString(portletPreferences.getValue("{%= ConfigBool1 %}","{%= ConfigBool1DefaultValue %}"));
	String {%= ConfigBool2 %} = GetterUtil.getString(portletPreferences.getValue("{%= ConfigBool2 %}","{%= ConfigBool2DefaultValue %}"));
	String {%= ConfigBool3 %} = GetterUtil.getString(portletPreferences.getValue("{%= ConfigBool3 %}","{%= ConfigBool3DefaultValue %}"));
	String {%= ConfigBool4 %} = GetterUtil.getString(portletPreferences.getValue("{%= ConfigBool4 %}","{%= ConfigBool4DefaultValue %}"));

	//set up strings to be passed to portlet
	String {%= ConfigString1 %} = GetterUtil.getString(portletPreferences.getValue("ConfigString1","{%= ConfigString1DefaultValue %}"));
	String {%= ConfigString2 %} = GetterUtil.getString(portletPreferences.getValue("ConfigString2","{%= ConfigString2DefaultValue %}"));
	String {%= ConfigString3 %} = GetterUtil.getString(portletPreferences.getValue("ConfigString3","{%= ConfigString3DefaultValue %}"));
	String {%= ConfigString4 %} = GetterUtil.getString(portletPreferences.getValue("ConfigString4","{%= ConfigString4DefaultValue %}"));
	
%>
<script>
	App.startWidget('{%= PortletName %}Widget', '.widget_<portlet:namespace />', {
		//pass bools into portlet
		{%= ConfigBool1 %}:<%= {%=ConfigBool1 %} %>,
		{%= ConfigBool2 %}:<%= {%=ConfigBool2 %} %>,
		{%= ConfigBool3 %}:<%= {%=ConfigBool3 %} %>,
		{%= ConfigBool4 %}:<%= {%=ConfigBool4 %} %>,

		//pass strings into portlet
		{%= ConfigString1 %}:'<%= {%=ConfigString1 %} %>',
		{%= ConfigString2 %}:'<%= {%=ConfigString2 %} %>',
		{%= ConfigString3 %}:'<%= {%=ConfigString3 %} %>',
		{%= ConfigString4 %}:'<%= {%=ConfigString4 %} %>'
	});
</script>

