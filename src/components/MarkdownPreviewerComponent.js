import React from "react";
import marked from "marked";

// Allows line breaks with the return button
marked.setOptions({
    breaks: true
});

// Set a function to be used by the marked Renderer, the bit that takes markdown and translates it to html, and create a callback for links to return the link in a diffrent format then the default.
const renderer = new marked.Renderer();

export default class MarkdownPreviewerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: placeholder
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({
            markdown: e.target.value
        });
    }
    render() {
        return (
            <div>
                <article class="center mw6 mw7-ns hidden  mv1 ">
                    <div className="AppWrap">
                        <div className="EditorWrap">
                            <Toolbar text="Enter Markdown:" />
                            <Editor
                                markdown={this.state.markdown}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="PreviewerWrap">
                            <Toolbar text="Preview:" />
                            <Previewer markdown={this.state.markdown} />
                        </div>
                    </div>
                </article>
            </div>
        );
    }
}

const Toolbar = props => {
    return (
        <label class="f6 b db mb2" >
            {props.text}
        </label>
    );
};

const Editor = props => {
    return (
        <form class="pa3-ns pa0 black-80 h5">
            <textarea id="comment" name="comment" class="db bg-washed-yellow border-box hover-black h-100 w-100 measure ba  pa3 br2 mb2"
                id="editor"
                value={props.markdown}
                onChange={props.onChange}
                type="text"
                aria-describedby="comment-desc"></textarea>
        </form>
    );
};

const Previewer = props => {
    return (
        <article class="center mw6 mw7-ns hidden mv1 ">

            <div class="pa3 tl flex-items-center justify-end">
                <div class="ba pa3 bg-near-white"
                    id="previewer"
                    dangerouslySetInnerHTML={{
                        __html: marked(props.markdown, { renderer: renderer })
                    }}
                />

            </div>

        </article>

    );
};

const placeholder = `# Notable lost films
## The First Men in the Moon (1919)
### Bruce Gordon and J. L. V. Leigh.
![Still from The First Men in the Moon](https://upload.wikimedia.org/wikipedia/en/5/50/The_First_Men_in_the_Moon_%281919%29.jpg)
Considered the first movie to ever be based entirely on a famous science fiction novel: **The First Men in the Moon** by [H.G. Wells](https://en.wikipedia.org/wiki/H._G._Wells).

## London After Midnight (1926)
### Tod Browning
![Lobby card from London After Midnight](https://upload.wikimedia.org/wikipedia/commons/9/9b/London_After_Midnight.jpg)
A silent-era vampire film that is seen as the _'holy grail'_ of lost films by collectors.

# It's Coding Time!

Look at this HTML: \`<div></div>\`, nifty eh?

## Python code block:
\`\`\`
# Iterative Binary Search Function 
# It returns location of x 
# in given array arr if present, 
# else returns -1 

def binarySearch(arr, l, r, x): 
  
    while l <= r: 
  
        mid = l + (r - l)//2; 
          
        # Check if x is present at mid 
        if arr[mid] == x: 
            return mid 
  
        # If x is greater, ignore left half 
        elif arr[mid] < x: 
            l = mid + 1
  
        # If x is smaller, ignore right half 
        else: 
            r = mid - 1
      
    # If we reach here, then 
    # the element was not present

    return -1
\`\`\`

`;