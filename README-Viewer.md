# Viewer for MFPvirtual_microscope
Open-source multifocal-plane virtual microscope for teaching histology

The "Multifocal-plane Virtual Microscope", which is the object of this GitHub Organization ([MFPvirtual-microscope](https://github.com/MFPvirtual-microscope)), is a internet-based program for displaying multifocal-plane, whole-slide-scanned microscope slides ("virtual slides"), which is intended for use in teaching histology (microscopic anatomy).  The virtual slides, which are stored using an image-tile architecture similar to that used by the Google Maps API, can be either single-focal-plane virtual slides typically used for teaching histology, or can consist of multiple focal planes.  With a multifocal-plane virtual slide, the user can focus up-and-down through the tissue section, allowing the student to gain a better appreciation of the three-dimensional structure of the specimen (for instance, see: [http://viewer.pnwu.edu?sb=3012](http://viewer.pnwu.edu/?sb=3012&x=148700&y=140100&z=9&hidelogo') or [http://viewer.pnwu.edu/?sb=3003](http://viewer.pnwu.edu/?sb=3003&x=97900&y=93300&z=9&f=4&hidelogo)).

This Virtual Microscope consists of two modules:
<ul><li>the "Viewer", which displays a selected virtual slide.  An example of an implementation of the Viewer can be seen at: [http://viewer.pnwu.edu].</li>
<li>the "SlideBox", which allows the user to search a database of virtual slides and to choose a slide to be displayed in the Viewer.  An example of an implementation of the SlideBox can be seen at:  [http://slidebox.pnwu.edu].</li>
</ul>

This repository
  
