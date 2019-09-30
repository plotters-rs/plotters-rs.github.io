(function() {var implementors = {};
implementors["plotters"] = [{text:"impl&lt;'a, 'b, DB&gt; Freeze for <a class=\"struct\" href=\"plotters/chart/struct.ChartBuilder.html\" title=\"struct plotters::chart::ChartBuilder\">ChartBuilder</a>&lt;'a, 'b, DB&gt;",synthetic:true,types:["plotters::chart::builder::ChartBuilder"]},{text:"impl&lt;'a, DB, CT&gt; Freeze for <a class=\"struct\" href=\"plotters/chart/struct.ChartContext.html\" title=\"struct plotters::chart::ChartContext\">ChartContext</a>&lt;'a, DB, CT&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;CT: Freeze,&nbsp;</span>",synthetic:true,types:["plotters::chart::context::ChartContext"]},{text:"impl&lt;'a, DB&gt; Freeze for <a class=\"struct\" href=\"plotters/chart/struct.SeriesAnno.html\" title=\"struct plotters::chart::SeriesAnno\">SeriesAnno</a>&lt;'a, DB&gt;",synthetic:true,types:["plotters::chart::context::SeriesAnno"]},{text:"impl&lt;'a, DB, CT1, CT2&gt; Freeze for <a class=\"struct\" href=\"plotters/chart/struct.DualCoordChartContext.html\" title=\"struct plotters::chart::DualCoordChartContext\">DualCoordChartContext</a>&lt;'a, DB, CT1, CT2&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;CT1: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;CT2: Freeze,&nbsp;</span>",synthetic:true,types:["plotters::chart::dual_coord::DualCoordChartContext"]},{text:"impl&lt;'a, 'b, X, Y, DB&gt; Freeze for <a class=\"struct\" href=\"plotters/chart/struct.MeshStyle.html\" title=\"struct plotters::chart::MeshStyle\">MeshStyle</a>&lt;'a, 'b, X, Y, DB&gt;",synthetic:true,types:["plotters::chart::mesh::MeshStyle"]},{text:"impl&lt;'a, 'b, DB, CT&gt; Freeze for <a class=\"struct\" href=\"plotters/chart/struct.SeriesLabelStyle.html\" title=\"struct plotters::chart::SeriesLabelStyle\">SeriesLabelStyle</a>&lt;'a, 'b, DB, CT&gt;",synthetic:true,types:["plotters::chart::series::SeriesLabelStyle"]},{text:"impl Freeze for <a class=\"enum\" href=\"plotters/chart/enum.LabelAreaPosition.html\" title=\"enum plotters::chart::LabelAreaPosition\">LabelAreaPosition</a>",synthetic:true,types:["plotters::chart::builder::LabelAreaPosition"]},{text:"impl Freeze for <a class=\"enum\" href=\"plotters/chart/enum.SeriesLabelPosition.html\" title=\"enum plotters::chart::SeriesLabelPosition\">SeriesLabelPosition</a>",synthetic:true,types:["plotters::chart::series::SeriesLabelPosition"]},{text:"impl&lt;Z&gt; Freeze for <a class=\"struct\" href=\"plotters/coord/struct.RangedDate.html\" title=\"struct plotters::coord::RangedDate\">RangedDate</a>&lt;Z&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Z as <a class=\"trait\" href=\"https://docs.rs/chrono/latest/chrono/offset/trait.TimeZone.html\" title=\"trait chrono::offset::TimeZone\">TimeZone</a>&gt;::<a class=\"type\" href=\"https://docs.rs/chrono/latest/chrono/offset/trait.TimeZone.html#associatedtype.Offset\" title=\"type chrono::offset::TimeZone::Offset\">Offset</a>: Freeze,&nbsp;</span>",synthetic:true,types:["plotters::coord::datetime::RangedDate"]},{text:"impl&lt;Z&gt; Freeze for <a class=\"struct\" href=\"plotters/coord/struct.RangedDateTime.html\" title=\"struct plotters::coord::RangedDateTime\">RangedDateTime</a>&lt;Z&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Z as <a class=\"trait\" href=\"https://docs.rs/chrono/latest/chrono/offset/trait.TimeZone.html\" title=\"trait chrono::offset::TimeZone\">TimeZone</a>&gt;::<a class=\"type\" href=\"https://docs.rs/chrono/latest/chrono/offset/trait.TimeZone.html#associatedtype.Offset\" title=\"type chrono::offset::TimeZone::Offset\">Offset</a>: Freeze,&nbsp;</span>",synthetic:true,types:["plotters::coord::datetime::RangedDateTime"]},{text:"impl Freeze for <a class=\"struct\" href=\"plotters/coord/struct.RangedCoordf32.html\" title=\"struct plotters::coord::RangedCoordf32\">RangedCoordf32</a>",synthetic:true,types:["plotters::coord::numeric::RangedCoordf32"]},{text:"impl Freeze for <a class=\"struct\" href=\"plotters/coord/struct.RangedCoordf64.html\" title=\"struct plotters::coord::RangedCoordf64\">RangedCoordf64</a>",synthetic:true,types:["plotters::coord::numeric::RangedCoordf64"]},{text:"impl Freeze for <a class=\"struct\" href=\"plotters/coord/struct.RangedCoordi32.html\" title=\"struct plotters::coord::RangedCoordi32\">RangedCoordi32</a>",synthetic:true,types:["plotters::coord::numeric::RangedCoordi32"]},{text:"impl Freeze for <a class=\"struct\" href=\"plotters/coord/struct.RangedCoordi64.html\" title=\"struct plotters::coord::RangedCoordi64\">RangedCoordi64</a>",synthetic:true,types:["plotters::coord::numeric::RangedCoordi64"]},{text:"impl Freeze for <a class=\"struct\" href=\"plotters/coord/struct.RangedCoordu32.html\" title=\"struct plotters::coord::RangedCoordu32\">RangedCoordu32</a>",synthetic:true,types:["plotters::coord::numeric::RangedCoordu32"]},{text:"impl Freeze for <a class=\"struct\" href=\"plotters/coord/struct.RangedCoordu64.html\" title=\"struct plotters::coord::RangedCoordu64\">RangedCoordu64</a>",synthetic:true,types:["plotters::coord::numeric::RangedCoordu64"]},{text:"impl&lt;X, Y&gt; Freeze for <a class=\"struct\" href=\"plotters/coord/struct.RangedCoord.html\" title=\"struct plotters::coord::RangedCoord\">RangedCoord</a>&lt;X, Y&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;X: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;Y: Freeze,&nbsp;</span>",synthetic:true,types:["plotters::coord::ranged::RangedCoord"]},{text:"impl&lt;V&gt; Freeze for <a class=\"struct\" href=\"plotters/coord/struct.LogCoord.html\" title=\"struct plotters::coord::LogCoord\">LogCoord</a>&lt;V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Freeze,&nbsp;</span>",synthetic:true,types:["plotters::coord::logarithmic::LogCoord"]},{text:"impl&lt;V&gt; Freeze for <a class=\"struct\" href=\"plotters/coord/struct.LogRange.html\" title=\"struct plotters::coord::LogRange\">LogRange</a>&lt;V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Freeze,&nbsp;</span>",synthetic:true,types:["plotters::coord::logarithmic::LogRange"]},{text:"impl Freeze for <a class=\"struct\" href=\"plotters/coord/struct.Shift.html\" title=\"struct plotters::coord::Shift\">Shift</a>",synthetic:true,types:["plotters::coord::Shift"]},{text:"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"plotters/coord/struct.ShiftAndTrans.html\" title=\"struct plotters::coord::ShiftAndTrans\">ShiftAndTrans</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>",synthetic:true,types:["plotters::coord::ShiftAndTrans"]},{text:"impl&lt;'a, X, Y&gt; Freeze for <a class=\"enum\" href=\"plotters/coord/enum.MeshLine.html\" title=\"enum plotters::coord::MeshLine\">MeshLine</a>&lt;'a, X, Y&gt;",synthetic:true,types:["plotters::coord::ranged::MeshLine"]},{text:"impl&lt;DB, CT&gt; Freeze for <a class=\"struct\" href=\"plotters/drawing/struct.DrawingArea.html\" title=\"struct plotters::drawing::DrawingArea\">DrawingArea</a>&lt;DB, CT&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;CT: Freeze,&nbsp;</span>",synthetic:true,types:["plotters::drawing::area::DrawingArea"]},{text:"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"plotters/drawing/struct.SVGBackend.html\" title=\"struct plotters::drawing::SVGBackend\">SVGBackend</a>&lt;'a&gt;",synthetic:true,types:["plotters::drawing::backend_impl::svg::SVGBackend"]},{text:"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"plotters/drawing/struct.BitMapBackend.html\" title=\"struct plotters::drawing::BitMapBackend\">BitMapBackend</a>&lt;'a&gt;",synthetic:true,types:["plotters::drawing::backend_impl::bitmap::BitMapBackend"]},{text:"impl&lt;E&gt; Freeze for <a class=\"enum\" href=\"plotters/drawing/enum.DrawingAreaErrorKind.html\" title=\"enum plotters::drawing::DrawingAreaErrorKind\">DrawingAreaErrorKind</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Freeze,&nbsp;</span>",synthetic:true,types:["plotters::drawing::area::DrawingAreaErrorKind"]},{text:"impl&lt;E&gt; Freeze for <a class=\"enum\" href=\"plotters/drawing/backend/enum.DrawingErrorKind.html\" title=\"enum plotters::drawing::backend::DrawingErrorKind\">DrawingErrorKind</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Freeze,&nbsp;</span>",synthetic:true,types:["plotters::drawing::backend::DrawingErrorKind"]},{text:"impl&lt;Coord&gt; Freeze for <a class=\"struct\" href=\"plotters/element/struct.Pixel.html\" title=\"struct plotters::element::Pixel\">Pixel</a>&lt;Coord&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Coord: Freeze,&nbsp;</span>",synthetic:true,types:["plotters::element::basic_shapes::Pixel"]},{text:"impl&lt;Coord&gt; Freeze for <a class=\"struct\" href=\"plotters/element/struct.Path.html\" title=\"struct plotters::element::Path\">Path</a>&lt;Coord&gt;",synthetic:true,types:["plotters::element::basic_shapes::Path"]},{text:"impl&lt;Coord&gt; Freeze for <a class=\"struct\" href=\"plotters/element/struct.Rectangle.html\" title=\"struct plotters::element::Rectangle\">Rectangle</a>&lt;Coord&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Coord: Freeze,&nbsp;</span>",synthetic:true,types:["plotters::element::basic_shapes::Rectangle"]},{text:"impl&lt;Coord&gt; Freeze for <a class=\"struct\" href=\"plotters/element/struct.Circle.html\" title=\"struct plotters::element::Circle\">Circle</a>&lt;Coord&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Coord: Freeze,&nbsp;</span>",synthetic:true,types:["plotters::element::basic_shapes::Circle"]},{text:"impl&lt;Coord&gt; Freeze for <a class=\"struct\" href=\"plotters/element/struct.Polygon.html\" title=\"struct plotters::element::Polygon\">Polygon</a>&lt;Coord&gt;",synthetic:true,types:["plotters::element::basic_shapes::Polygon"]},{text:"impl&lt;'a, Coord, T&gt; Freeze for <a class=\"struct\" href=\"plotters/element/struct.Text.html\" title=\"struct plotters::element::Text\">Text</a>&lt;'a, Coord, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Coord: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>",synthetic:true,types:["plotters::element::text::Text"]},{text:"impl&lt;'a, Coord, T&gt; Freeze for <a class=\"struct\" href=\"plotters/element/struct.MultiLineText.html\" title=\"struct plotters::element::MultiLineText\">MultiLineText</a>&lt;'a, Coord, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Coord: Freeze,&nbsp;</span>",synthetic:true,types:["plotters::element::text::MultiLineText"]},{text:"impl&lt;Coord&gt; Freeze for <a class=\"struct\" href=\"plotters/element/struct.Cross.html\" title=\"struct plotters::element::Cross\">Cross</a>&lt;Coord&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Coord: Freeze,&nbsp;</span>",synthetic:true,types:["plotters::element::points::Cross"]},{text:"impl&lt;Coord&gt; Freeze for <a class=\"struct\" href=\"plotters/element/struct.TriangleMarker.html\" title=\"struct plotters::element::TriangleMarker\">TriangleMarker</a>&lt;Coord&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Coord: Freeze,&nbsp;</span>",synthetic:true,types:["plotters::element::points::TriangleMarker"]},{text:"impl&lt;Coord, DB, A, B&gt; Freeze for <a class=\"struct\" href=\"plotters/element/struct.ComposedElement.html\" title=\"struct plotters::element::ComposedElement\">ComposedElement</a>&lt;Coord, DB, A, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;Coord: Freeze,&nbsp;</span>",synthetic:true,types:["plotters::element::composable::ComposedElement"]},{text:"impl&lt;Coord, DB&gt; Freeze for <a class=\"struct\" href=\"plotters/element/struct.EmptyElement.html\" title=\"struct plotters::element::EmptyElement\">EmptyElement</a>&lt;Coord, DB&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Coord: Freeze,&nbsp;</span>",synthetic:true,types:["plotters::element::composable::EmptyElement"]},{text:"impl&lt;X, Y&gt; Freeze for <a class=\"struct\" href=\"plotters/element/struct.CandleStick.html\" title=\"struct plotters::element::CandleStick\">CandleStick</a>&lt;X, Y&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;X: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;Y: Freeze,&nbsp;</span>",synthetic:true,types:["plotters::element::candlestick::CandleStick"]},{text:"impl&lt;K, V, O&gt; Freeze for <a class=\"struct\" href=\"plotters/element/struct.ErrorBar.html\" title=\"struct plotters::element::ErrorBar\">ErrorBar</a>&lt;K, V, O&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Freeze,&nbsp;</span>",synthetic:true,types:["plotters::element::errorbar::ErrorBar"]},{text:"impl&lt;K, V&gt; Freeze for <a class=\"struct\" href=\"plotters/element/struct.ErrorBarOrientH.html\" title=\"struct plotters::element::ErrorBarOrientH\">ErrorBarOrientH</a>&lt;K, V&gt;",synthetic:true,types:["plotters::element::errorbar::ErrorBarOrientH"]},{text:"impl&lt;K, V&gt; Freeze for <a class=\"struct\" href=\"plotters/element/struct.ErrorBarOrientV.html\" title=\"struct plotters::element::ErrorBarOrientV\">ErrorBarOrientV</a>&lt;K, V&gt;",synthetic:true,types:["plotters::element::errorbar::ErrorBarOrientV"]},{text:"impl&lt;'a, DB, Coord&gt; Freeze for <a class=\"struct\" href=\"plotters/element/struct.DynElement.html\" title=\"struct plotters::element::DynElement\">DynElement</a>&lt;'a, DB, Coord&gt;",synthetic:true,types:["plotters::element::DynElement"]},{text:"impl&lt;DB, X, Y&gt; Freeze for <a class=\"struct\" href=\"plotters/series/struct.AreaSeries.html\" title=\"struct plotters::series::AreaSeries\">AreaSeries</a>&lt;DB, X, Y&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Y: Freeze,&nbsp;</span>",synthetic:true,types:["plotters::series::area_series::AreaSeries"]},{text:"impl&lt;BR, A, Tag&gt; Freeze for <a class=\"struct\" href=\"plotters/series/struct.Histogram.html\" title=\"struct plotters::series::Histogram\">Histogram</a>&lt;BR, A, Tag&gt;",synthetic:true,types:["plotters::series::histogram::Histogram"]},{text:"impl&lt;Coord, I&gt; Freeze for <a class=\"struct\" href=\"plotters/series/struct.LineSeries.html\" title=\"struct plotters::series::LineSeries\">LineSeries</a>&lt;Coord, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;I as <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&gt;::<a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.IntoIter\" title=\"type core::iter::traits::collect::IntoIterator::IntoIter\">IntoIter</a>: Freeze,&nbsp;</span>",synthetic:true,types:["plotters::series::line_series::LineSeries"]},{text:"impl&lt;'a, Coord, I, E&gt; Freeze for <a class=\"struct\" href=\"plotters/series/struct.PointSeries.html\" title=\"struct plotters::series::PointSeries\">PointSeries</a>&lt;'a, Coord, I, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;I as <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&gt;::<a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.IntoIter\" title=\"type core::iter::traits::collect::IntoIterator::IntoIter\">IntoIter</a>: Freeze,&nbsp;</span>",synthetic:true,types:["plotters::series::point_series::PointSeries"]},{text:"impl Freeze for <a class=\"struct\" href=\"plotters/style/struct.Palette99.html\" title=\"struct plotters::style::Palette99\">Palette99</a>",synthetic:true,types:["plotters::style::palette::Palette99"]},{text:"impl Freeze for <a class=\"struct\" href=\"plotters/style/struct.Palette9999.html\" title=\"struct plotters::style::Palette9999\">Palette9999</a>",synthetic:true,types:["plotters::style::palette::Palette9999"]},{text:"impl Freeze for <a class=\"struct\" href=\"plotters/style/struct.Palette100.html\" title=\"struct plotters::style::Palette100\">Palette100</a>",synthetic:true,types:["plotters::style::palette::Palette100"]},{text:"impl Freeze for <a class=\"struct\" href=\"plotters/style/struct.HSLColor.html\" title=\"struct plotters::style::HSLColor\">HSLColor</a>",synthetic:true,types:["plotters::style::color::HSLColor"]},{text:"impl&lt;P&gt; Freeze for <a class=\"struct\" href=\"plotters/style/struct.PaletteColor.html\" title=\"struct plotters::style::PaletteColor\">PaletteColor</a>&lt;P&gt;",synthetic:true,types:["plotters::style::color::PaletteColor"]},{text:"impl Freeze for <a class=\"struct\" href=\"plotters/style/struct.RGBAColor.html\" title=\"struct plotters::style::RGBAColor\">RGBAColor</a>",synthetic:true,types:["plotters::style::color::RGBAColor"]},{text:"impl Freeze for <a class=\"struct\" href=\"plotters/style/struct.RGBColor.html\" title=\"struct plotters::style::RGBColor\">RGBColor</a>",synthetic:true,types:["plotters::style::color::RGBColor"]},{text:"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"plotters/style/struct.FontDesc.html\" title=\"struct plotters::style::FontDesc\">FontDesc</a>&lt;'a&gt;",synthetic:true,types:["plotters::style::font::font_desc::FontDesc"]},{text:"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"plotters/style/struct.TextStyle.html\" title=\"struct plotters::style::TextStyle\">TextStyle</a>&lt;'a&gt;",synthetic:true,types:["plotters::style::TextStyle"]},{text:"impl Freeze for <a class=\"struct\" href=\"plotters/style/struct.ShapeStyle.html\" title=\"struct plotters::style::ShapeStyle\">ShapeStyle</a>",synthetic:true,types:["plotters::style::ShapeStyle"]},{text:"impl Freeze for <a class=\"enum\" href=\"plotters/style/enum.FontTransform.html\" title=\"enum plotters::style::FontTransform\">FontTransform</a>",synthetic:true,types:["plotters::style::font::font_desc::FontTransform"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
