(function() {var implementors = {};
implementors["plotters"] = [{text:"impl&lt;Z:&nbsp;<a class=\"trait\" href=\"https://docs.rs/chrono/latest/chrono/offset/trait.TimeZone.html\" title=\"trait chrono::offset::TimeZone\">TimeZone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/ops/range/struct.Range.html\" title=\"struct core::ops::range::Range\">Range</a>&lt;<a class=\"struct\" href=\"https://docs.rs/chrono/latest/chrono/date/struct.Date.html\" title=\"struct chrono::date::Date\">Date</a>&lt;Z&gt;&gt;&gt; for <a class=\"struct\" href=\"plotters/coord/struct.RangedDate.html\" title=\"struct plotters::coord::RangedDate\">RangedDate</a>&lt;Z&gt;",synthetic:false,types:["plotters::coord::datetime::RangedDate"]},{text:"impl&lt;V:&nbsp;<a class=\"trait\" href=\"plotters/coord/trait.LogScalable.html\" title=\"trait plotters::coord::LogScalable\">LogScalable</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"plotters/coord/struct.LogRange.html\" title=\"struct plotters::coord::LogRange\">LogRange</a>&lt;V&gt;&gt; for <a class=\"struct\" href=\"plotters/coord/struct.LogCoord.html\" title=\"struct plotters::coord::LogCoord\">LogCoord</a>&lt;V&gt;",synthetic:false,types:["plotters::coord::logarithmic::LogCoord"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/ops/range/struct.Range.html\" title=\"struct core::ops::range::Range\">Range</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f32.html\">f32</a>&gt;&gt; for <a class=\"struct\" href=\"plotters/coord/struct.RangedCoordf32.html\" title=\"struct plotters::coord::RangedCoordf32\">RangedCoordf32</a>",synthetic:false,types:["plotters::coord::numeric::RangedCoordf32"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/ops/range/struct.Range.html\" title=\"struct core::ops::range::Range\">Range</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>&gt;&gt; for <a class=\"struct\" href=\"plotters/coord/struct.RangedCoordf64.html\" title=\"struct plotters::coord::RangedCoordf64\">RangedCoordf64</a>",synthetic:false,types:["plotters::coord::numeric::RangedCoordf64"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/ops/range/struct.Range.html\" title=\"struct core::ops::range::Range\">Range</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt;&gt; for <a class=\"struct\" href=\"plotters/coord/struct.RangedCoordu32.html\" title=\"struct plotters::coord::RangedCoordu32\">RangedCoordu32</a>",synthetic:false,types:["plotters::coord::numeric::RangedCoordu32"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/ops/range/struct.Range.html\" title=\"struct core::ops::range::Range\">Range</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>&gt;&gt; for <a class=\"struct\" href=\"plotters/coord/struct.RangedCoordi32.html\" title=\"struct plotters::coord::RangedCoordi32\">RangedCoordi32</a>",synthetic:false,types:["plotters::coord::numeric::RangedCoordi32"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/ops/range/struct.Range.html\" title=\"struct core::ops::range::Range\">Range</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>&gt;&gt; for <a class=\"struct\" href=\"plotters/coord/struct.RangedCoordu64.html\" title=\"struct plotters::coord::RangedCoordu64\">RangedCoordu64</a>",synthetic:false,types:["plotters::coord::numeric::RangedCoordu64"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/ops/range/struct.Range.html\" title=\"struct core::ops::range::Range\">Range</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>&gt;&gt; for <a class=\"struct\" href=\"plotters/coord/struct.RangedCoordi64.html\" title=\"struct plotters::coord::RangedCoordi64\">RangedCoordi64</a>",synthetic:false,types:["plotters::coord::numeric::RangedCoordi64"]},{text:"impl&lt;DB:&nbsp;<a class=\"trait\" href=\"plotters/drawing/backend/trait.DrawingBackend.html\" title=\"trait plotters::drawing::backend::DrawingBackend\">DrawingBackend</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;DB&gt; for <a class=\"struct\" href=\"plotters/drawing/struct.DrawingArea.html\" title=\"struct plotters::drawing::DrawingArea\">DrawingArea</a>&lt;DB, <a class=\"struct\" href=\"plotters/coord/struct.Shift.html\" title=\"struct plotters::coord::Shift\">Shift</a>&gt;",synthetic:false,types:["plotters::drawing::area::DrawingArea"]},{text:"impl&lt;'a, DB:&nbsp;<a class=\"trait\" href=\"plotters/drawing/backend/trait.DrawingBackend.html\" title=\"trait plotters::drawing::backend::DrawingBackend\">DrawingBackend</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/rc/struct.Rc.html\" title=\"struct alloc::rc::Rc\">Rc</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/cell/struct.RefCell.html\" title=\"struct core::cell::RefCell\">RefCell</a>&lt;DB&gt;&gt;&gt; for <a class=\"struct\" href=\"plotters/drawing/struct.DrawingArea.html\" title=\"struct plotters::drawing::DrawingArea\">DrawingArea</a>&lt;DB, <a class=\"struct\" href=\"plotters/coord/struct.Shift.html\" title=\"struct plotters::coord::Shift\">Shift</a>&gt;",synthetic:false,types:["plotters::drawing::area::DrawingArea"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"plotters/style/struct.FontDesc.html\" title=\"struct plotters::style::FontDesc\">FontDesc</a>&lt;'a&gt;",synthetic:false,types:["plotters::style::font::font_desc::FontDesc"]},{text:"impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>, T<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"plotters/style/struct.FontDesc.html\" title=\"struct plotters::style::FontDesc\">FontDesc</a>&lt;'a&gt;",synthetic:false,types:["plotters::style::font::font_desc::FontDesc"]},{text:"impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"plotters/style/struct.FontDesc.html\" title=\"struct plotters::style::FontDesc\">FontDesc</a>&lt;'a&gt;&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"struct\" href=\"plotters/style/struct.TextStyle.html\" title=\"struct plotters::style::TextStyle\">TextStyle</a>&lt;'a&gt;",synthetic:false,types:["plotters::style::TextStyle"]},{text:"impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"plotters/style/trait.Color.html\" title=\"trait plotters::style::Color\">Color</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a </a>T&gt; for <a class=\"struct\" href=\"plotters/style/struct.ShapeStyle.html\" title=\"struct plotters::style::ShapeStyle\">ShapeStyle</a>",synthetic:false,types:["plotters::style::ShapeStyle"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
