package com.{%= CompanyNameLowerCase %}.{%= JavaNameSpaceProduct %}.portlet.action;
import com.liferay.portal.kernel.portlet.DefaultConfigurationAction;
import javax.portlet.ActionRequest;
import javax.portlet.ActionResponse;
import javax.portlet.PortletConfig;
import javax.portlet.PortletPreferences;
public class {%= PortletName %}ActionImpl extends DefaultConfigurationAction {
	@Override
	public void processAction(PortletConfig portletConfig, ActionRequest actionRequest, ActionResponse actionResponse) throws Exception
	{
		super.processAction(portletConfig, actionRequest, actionResponse);
		PortletPreferences prefs = actionRequest.getPreferences();

		//Configuration Bools
		String {%= ConfigBool1 %} = prefs.getValue("{%= ConfigBool1 %}","{%= ConfigBool1DefaultValue %}");
		String {%= ConfigBool2 %} = prefs.getValue("{%= ConfigBool2 %}","{%= ConfigBool2DefaultValue %}");
		String {%= ConfigBool3 %} = prefs.getValue("{%= ConfigBool3 %}","{%= ConfigBool3DefaultValue %}");
		String {%= ConfigBool4 %} = prefs.getValue("{%= ConfigBool4 %}","{%= ConfigBool4DefaultValue %}");

		//Configuration Strings
		String {%= ConfigString1 %} = prefs.getValue("{%= ConfigString1 %}","{%= ConfigString1DefaultValue %}");
		String {%= ConfigString2 %} = prefs.getValue("{%= ConfigString2 %}","{%= ConfigString2DefaultValue %}");
		String {%= ConfigString3 %} = prefs.getValue("{%= ConfigString3 %}","{%= ConfigString3DefaultValue %}");
		String {%= ConfigString4 %} = prefs.getValue("{%= ConfigString4 %}","{%= ConfigString4DefaultValue %}");
	}
}