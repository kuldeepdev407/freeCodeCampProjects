

function surveyChange(tag)
{
    console.log(tag.value);
    
    if(tag.value=='feedback'){
        document.getElementById("extra").innerHTML=`
        <div class="input-group">
            <label for="know" id="know-label">How do you know Kuldeep Singh?</label>
            <input type="text"  name="know" id="know" maxlenght="100" placeholder="Ans" required>
        </div>
        <div class="input-group" >
            <p style="margin-bottom:10px">What What do you think about Kuldeep Singh?</p>
            <div>
                <input type="checkbox" id="nice" name="think" value="nice">
                <label for="nice">Nice</label>
            </div>
            <div>
            <input type="checkbox" id="irritate" name="think" value="irritate">
            <label for="irritate">Irritating/Annoying</label>
            </div>
            <div>
            <input type="checkbox" id="hard" name="think" value="hard">
            <label for="hard">Hard worker</label>
            </div>
            <div>
            <input type="checkbox" id="smart" name="think" value="smart">
            <label for="smart">Smart Worker</label>
            </div>
            <div>
            <input type="checkbox" id="punctual" name="think" value="punctual">
            <label for="punctual">Punctual</label>
            </div>
            <div>
            <input type="checkbox" id="confident" name="think" value="confident">
            <label for="confident">Confident</label>
            </div>
            <div>
            <input type="checkbox" id="anxious" name="think" value="anxious">
            <label for="anxious">Anxious</label>
            </div>
            <div>
            <input type="checkbox" id="learner" name="think" value="learner">
            <label for="learner">Learner</label>
            </div>
            <div>
            <input type="checkbox" id="good" name="think" value="good">
            <label for="good">Good Looking </label>
            </div>
            <div>
            <input type="checkbox" id="lazy" name="think" value="lazy">
            <label for="lazy">Lazy</label>
            </div>
            <div>
            <input type="checkbox" id="friendly" name="think" value="friendly">
            <label for="friendly">Friendly</label>
            </div>
        </div>
        `;
    }
    else if(tag.value=='ideas'){
        document.getElementById("extra").innerHTML = `
        <div class="input-group">
    <label for="titlel" id="title-label">Title</label>
    <input type="text"  name="title" id="titlel" maxlength="64" placeholder="Enter title of your idea or Project" required>
    </div>
    <div class="input-group">
    <label for="desc" id="desc-label">Description (optional)</label>
    <textarea name="desc" id="desc" rows="5" maxlength="600" placeholder="Describe your idea/Project in less that 600 charcter"></textarea>
    </div>
    <div class="input-group" style="position:relative;align-text:left;">
    <label for="file" id="file-label">Add Attachments(optional)</label>
    <input type="file" style="display:none;" name="file" id="file">
    <p class="file-name" style="font-size:10px;"></p>    
</div>
        `;
        const file = document.querySelector('#file');
    file.addEventListener('change', (e) => {
        const [file] = e.target.files;
        const { name: fileName, size } = file;
        const fileSize = (size / 1000).toFixed(2);
        const fileNameAndSize = `${fileName} - ${fileSize}KB`;
        document.querySelector('.file-name').textContent = fileNameAndSize;
    console.log(file);
    });
    }
}