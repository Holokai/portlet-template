<%@page import="com.liferay.portal.model.Layout"%> 
<%@page import="java.util.List"%> 
<%@page import="com.liferay.portal.kernel.util.StringPool"%> 
<%@page import="com.liferay.portal.kernel.util.GetterUtil"%> 
<%@page import="com.liferay.portal.kernel.util.Constants"%> 
<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %> 
<%@ taglib uri="http://liferay.com/tld/theme" prefix="liferay-theme" %> 
<%@ taglib uri="http://liferay.com/tld/ui" prefix="liferay-ui" %> 
<%@ taglib uri="http://liferay.com/tld/portlet" prefix="liferay-portlet" %> 
<%@ taglib uri="http://liferay.com/tld/aui" prefix="aui" %>
<liferay-theme:defineObjects />
<portlet:defineObjects />
<liferay-portlet:actionURL portletConfiguration="true" var="configurationURL" />
<%
	//Config Bools
	String {%= ConfigBool1 %} = GetterUtil.getString(portletPreferences.getValue("{%= ConfigBool1 %}","{%= ConfigBool1DefaultValue %}"));
	String {%= ConfigBool2 %} = GetterUtil.getString(portletPreferences.getValue("{%= ConfigBool2 %}","{%= ConfigBool2DefaultValue %}"));
	String {%= ConfigBool3 %} = GetterUtil.getString(portletPreferences.getValue("{%= ConfigBool3 %}","{%= ConfigBool3DefaultValue %}"));
	String {%= ConfigBool4 %} = GetterUtil.getString(portletPreferences.getValue("{%= ConfigBool4 %}","{%= ConfigBool4DefaultValue %}"));
	
	//Config Strings
	String {%= ConfigString1 %} = GetterUtil.getString(portletPreferences.getValue("{%= ConfigString1 %}","{%= ConfigString1DefaultValue %}"));
	String {%= ConfigString2 %} = GetterUtil.getString(portletPreferences.getValue("{%= ConfigString2 %}","{%= ConfigString2DefaultValue %}"));
	String {%= ConfigString3 %} = GetterUtil.getString(portletPreferences.getValue("{%= ConfigString3 %}","{%= ConfigString3DefaultValue %}"));
	String {%= ConfigString4 %} = GetterUtil.getString(portletPreferences.getValue("{%= ConfigString4 %}","{%= ConfigString4DefaultValue %}"));

	
	
	if (themeDisplay.isSignedIn()) {
%>
	<aui:form action="<%= configurationURL %>" method="post" name="fm">
		<aui:input name="<%= Constants.CMD %>" type="hidden" value="<%= Constants.UPDATE %>" />

		<!-- Config Bools -->
		<aui:field-wrapper first="true" label="{%= ConfigBool1 %}" name="preferences--{%= ConfigBool1 %}--">
			<aui:input checked="<%= Boolean.parseBoolean({%= ConfigBool1 %}) %>" inlineLabel="right" name="preferences--{%= ConfigBool1 %}--" type="radio" value="true" label="True" />
			<aui:input checked="<%= !Boolean.parseBoolean({%= ConfigBool1 %}) %>" inlineLabel="right" name="preferences--{%= ConfigBool1 %}--" type="radio" value="false" label="False"  />
		</aui:field-wrapper>

		<aui:field-wrapper label="{%= ConfigBool2 %}" name="preferences--{%= ConfigBool2 %}--">
			<aui:input checked="<%= Boolean.parseBoolean({%= ConfigBool2 %}) %>" inlineLabel="right" name="preferences--{%= ConfigBool2 %}--" type="radio" value="true" label="True" />
			<aui:input checked="<%= !Boolean.parseBoolean({%= ConfigBool2 %}) %>" inlineLabel="right" name="preferences--{%= ConfigBool2 %}--" type="radio" value="false" label="False"  />
		</aui:field-wrapper>

		<aui:field-wrapper label="{%= ConfigBool3 %}" name="preferences--{%= ConfigBool3 %}--">
			<aui:input checked="<%= Boolean.parseBoolean({%= ConfigBool3 %}) %>" inlineLabel="right" name="preferences--{%= ConfigBool3 %}--" type="radio" value="true" label="True" />
			<aui:input checked="<%= !Boolean.parseBoolean({%= ConfigBool3 %}) %>" inlineLabel="right" name="preferences--{%= ConfigBool3 %}--" type="radio" value="false" label="False"  />
		</aui:field-wrapper>

		<aui:field-wrapper label="{%= ConfigBool4 %}" name="preferences--{%= ConfigBool4 %}--">
			<aui:input checked="<%= Boolean.parseBoolean({%= ConfigBool4 %}) %>" inlineLabel="right" name="preferences--{%= ConfigBool4 %}--" type="radio" value="true" label="True" />
			<aui:input checked="<%= !Boolean.parseBoolean({%= ConfigBool4 %}) %>" inlineLabel="right" name="preferences--{%= ConfigBool4 %}--" type="radio" value="false" label="False"  />
		</aui:field-wrapper>

		<!--Config Strings-->
		<aui:field-wrapper label="{%= ConfigString1 %}" name="preferences--{%= ConfigString1 %}--">
			<aui:input inlineLabel="right" name="preferences--{%= ConfigString1 %}--" type="text" value="{%= ConfigString1 %}" label="{%= ConfigString1 %}" />
		</aui:field-wrapper>

		<aui:field-wrapper label="{%= ConfigString2 %}" name="preferences--{%= ConfigString2 %}--">
			<aui:input inlineLabel="right" name="preferences--{%= ConfigString2 %}--" type="text" value="{%= ConfigString2 %}" label="{%= ConfigString2 %}" />
		</aui:field-wrapper>

		<aui:field-wrapper label="{%= ConfigString3 %}" name="preferences--{%= ConfigString3 %}--">
			<aui:input inlineLabel="right" name="preferences--{%= ConfigString3 %}--" type="text" value="{%= ConfigString3 %}" label="{%= ConfigString3 %}" />
		</aui:field-wrapper>

		<aui:field-wrapper last="true" label="{%= ConfigString4 %}" name="preferences--{%= ConfigString4 %}--">
			<aui:input inlineLabel="right" name="preferences--{%= ConfigString4 %}--" type="text" value="{%= ConfigString4 %}" label="{%= ConfigString4 %}" />
		</aui:field-wrapper>

		<aui:button-row>
		<aui:button type="submit" /> </aui:button-row>
	</aui:form>
<%	}   else { %>
	<liferay-ui:error>You must be signed in to configure portlet preferences</liferay-ui:error> 
<%	} %> <script>
	AUI().ready('aui-form-validator', function(A) {
		var formValidator;
		var setFormValidation = function() {
			formValidator = new A.FormValidator({
			boundingBox: '#<portlet:namespace />fm'
		});  
	};