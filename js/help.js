// This is awful, but will work for now.

helpdoc = {
help_top:"\
<h5>Tutorials</h5>\
<a href='http://www.stefanom.org/category/systemic-live/' target='_new'>Go to tutorial</a>\
<h5>Systems</h5>\
The System dropdown lists all the available stars that have \
public radial velocity observations associated with them. Each star \
has been observed by one or more telescopes (e.g. KECK, HARPS, AAT, etc.). \
Selecting a new system will load the data (shown as colorful dots \
in the Radial Velocity plot.)\
<h5>Optimize fit</h5>\
The \"Optimize fit\" tool will attempt to improve the match between \
the model fit and the radial velocity observations (i.e. decrease \
the value of Chi<sup>2</sup>) by varying the values of the planetary \
parameters (e.g. period, mass, etc.) and the velocity offsets. \
Only parameters that are checked (<input type=\"checkbox\" checked>) \
will be varied; the others will be held fixed.\
",

help_rvplot:"\
<h5>Radial velocity plot</h5>\
This plot shows the available data for the selected system. \
Each dot represent a single observation at a given time (in Julian Days) on the x-axis \
and the recorded Doppler shift on the y-axis (in meters/second). Each telescope \
has a different dot color.<br>\
The black curve is the predicted response velocity due to the presence of \
a planetary system. It will be a zero-velocity line if there are no planets, \
a sinusoidal line if there is one planet in a circular orbit, and a more \
complicated curve with multiple/eccentric planets.\
",

help_statistics:"\
<h5>Statistics</h5>\
This table shows the values of several properties calculated from the \
current planetary configuration: <br>\
<ul>\
<li>Chi<sup>2</sup><sub>red</sub> is a measure of the goodness of the \
model fit;</li>\
<li>RMS is the root mean square of the residuals (a measure of the amount \
of Doppler shift that is not explained by the planetary tug); </li>\
<li>Jitter is a rough measure of the residual stellar noise, assuming the \
model is correct;</li></ul>\
",

help_offsets:"\
<h5>Telescope offsets</h5>\
This table shows the different telescopes that have observed the \
system. The parameter fields allow shifting the zero-point of the \
radial velocity datasets up and down.\
",

help_planets:"\
<h5>Planets</h5>\
Click on Add Planet to add a new planet to the system. You can have \
up to 6 planets. Each planet will change the radial velocity curve \
according to its orbital elements, listed below:\
<ul>\
<li>Period is the orbital period of the planet, in days.</li>\
<li>Mass is the mass of the planet in Jupiter masses.</li>\
<li>Mean Anomaly is the phase of the planet (i.e. where it is along its orbit) at the \
time of the first radial velocity observation.</li>\
<li>Eccentricity changes the shape of the orbit. An eccentricity of 0 is a perfectly \
circular orbit; as the eccentricity increases, the orbit becomes more elliptical.</li> \
<li>Longitude of pericenter sets the orientation of the orbit with respect to the \
observer, changing the direction of the major axis of the orbital ellipse. </li></ul>\
",

help_orbit:"\
<h5>Orbital plot</h5>\
This figure shows the orbital configuration of the planets. Click on \
<span class=\"glyphicon glyphicon-zoom-in\"></span> and <span class=\"glyphicon glyphicon-zoom-out\"></span> \
to zoom the plot in and out.\
"
}
