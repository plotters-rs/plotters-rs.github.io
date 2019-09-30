title: Welcome to the home page of Plotters, the Rust drawing and plotting library

Plotters is a library that helps you produce figures and visualize data in Rust. It supports both rendering static image and realtime rendering and targeted to multiple backends, including: bitmap formats (png, bmp, gif, etc), vector graph (svg), window and HTML5 canvas. 

Generally speaking, Plotters is a library for plotting in Rust. But instead of directly addressing the plotting problem, Plotters adpots a very different approach, which provides a convient drawing API which makes drawing a plot much easier. 

Plotters is a drawing library that uses unified high-level APIs on different backend and allows programmer to define customized coordinate systems. Any types of charts is abstracted as a series of drawing operations, by doing so, Plotters doesn't limit programmer on what types of chart they can draw. You can draw line series, histogram, scatters, error bars, candel sticks chart easily and everything can be extend. 

For most commonly used types of series, Plotters provides some helper types to make data visualization easier. Checkout our gallery and examples for more details.


::contents.md::
