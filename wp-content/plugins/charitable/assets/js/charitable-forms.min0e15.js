/*!  1.6.54 2021-11-12 14:30 */

!function(a){a(document).ready(function(){["#charitable-registration-form","#charitable-profile-form","#charitable-campaign-submission-form"].forEach(function(t){var i=a(t);i.length&&(i.append('<input type="hidden" id="charitable-submit-button-value" />'),i.find("[type=submit]").on("click",function(t){if(i[0].checkValidity()){var a=t.currentTarget.name,t=t.currentTarget.value;return i.find("#charitable-submit-button-value").attr("name",a).attr("value",t),i.find("[type=submit]").attr("disabled","disabled"),i.submit()}}))})})}(jQuery);