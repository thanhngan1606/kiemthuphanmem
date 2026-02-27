@echo off
echo ========================================
echo Starting JMeter with Test Plan
echo ========================================
echo.
cd apache-jmeter-5.6.3\bin
start jmeter.bat -t SauceDemo_Performance_Test.jmx
echo.
echo JMeter dang mo voi file test san...
echo Vui long doi JMeter khoi dong xong!
echo.
pause
