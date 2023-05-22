const assistance = document.getElementById('assistance');
const entryInput = document.getElementById('entryInput');
const addEntryBtn = document.getElementById('addEntryBtn');
const summaryBtn = document.getElementById('summaryBtn');
const entriesList = document.getElementById('entriesList');
const summaryList = document.getElementById('summaryList');

let assistanceEntries = [];

function addEntry() {
  const entry = entryInput.value.trim();
  if (entry === '' || entry.split(',').length !== 3) {
    alert('Invalid entry');
    return;
  }

  const [directoryId, description, duration] = entry.split(',');

  const entryItem = document.createElement('li');
  entryItem.textContent = `${directoryId} ${description} ${duration}`;
  entriesList.appendChild(entryItem);

  assistanceEntries.push({ directoryId, description, duration });

  entryInput.value = '';
}

function summary() {
  const sortedEntries = assistanceEntries.sort((a, b) => a.duration - b.duration);

  summaryList.innerHTML = '';
  const countItem = document.createElement('li');
  countItem.textContent = `Number of entries: ${assistanceEntries.length}`;
  summaryList.appendChild(countItem);

  sortedEntries.forEach((entry) => {
    const entryItem = document.createElement('li');
    entryItem.textContent = `${entry.directoryId} ${entry.description} ${entry.duration}`;
    

summaryList.appendChild(entryItem);
  });
}

addEntryBtn.addEventListener('click', addEntry);
summaryBtn.addEventListener('click', summary);
