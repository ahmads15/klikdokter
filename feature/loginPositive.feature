Feature: Login Page

Background: Open Web browser taniHub.com

Scenario: [Positive Case] Success Login
Given a web browser is KlikDokter Login page
When User click profile
And User click Masuk
And User input email
And User input password
And User click verifikasi nanti
Then User successfully login