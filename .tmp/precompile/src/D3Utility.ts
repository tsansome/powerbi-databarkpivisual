
module powerbi.extensibility.visual.databarKPIB8060E2B144244C5A38807466893C9F6  {

    export class Area {
        x_min:number;
        x_max:number;
        y_min:number;
        y_max:number;
        public constructor(x_min, x_max, y_min, y_max) {
            this.x_min = x_min;
            this.x_max = x_max;
            this.y_min = y_min;
            this.y_max = y_max;
        }
        public width(): number {
            return this.x_max - this.x_min;
        }
        public height(): number {
            return this.y_max - this.y_min;
        }
    }

    export class Label {

        content: string;
        font_size: string;
        font_family: string;

        class_name: string;

        private _container: any;
        private _width: number;
        private _height: number;

        public constructor(defaultSVGContainer:any,content:string, font_size: string, font_family: string) {
            this.content = content;
            this.font_size = font_size;
            this.font_family = font_family;

            this._container = defaultSVGContainer;

            //now set everything to null
            this.class_name = null;
            this._height = null;
            this._width = null;
        }

        public paint(class_name: string, container: any, x:number, y:number) {
            this._container = container;
            this.class_name = class_name;
            //now let's paint it
            this._container.append("text")
                           .attr("y", y)
                           .attr("x", x)
                           .classed(this.class_name,true)
                           .text(this.content)
                           .style("font-size", this.font_size)
                           .style("font-family", this.font_family);
        }

        public width() {
            var sample_class = "sampleText";
            if (this.class_name == null) {
                //draw this with a sample class then remove it
                this.paint(sample_class, this._container, 0, 0);
            }
            var tmp = this._container.select("." + this.class_name).node().getBBox().width;
            if (this.class_name == sample_class) {
                this.remove();
            }
            return tmp;
        }

        public height() {
            var sample_class = "sampleText";
            if (this.class_name == null) {
                //draw this with a sample class then remove it
                this.paint(sample_class, this._container, 0, 0);
            }
            var tmp = this._container.select("." + this.class_name).node().getBBox().height;
            if (this.class_name == sample_class) {
                this.remove();
            }
            return tmp;
        }

        public remove() {
            //unpaint it
            if (this.class_name != null) {
                this._container.select("." + this.class_name).remove();
            }
            //now unset the attributes set when drawn
            this.class_name = null;
            this._height = null;
            this._width = null;
        }
    }

}